import type from 'type-detect';

class ArrayHelper {
	/**
	 * makeUint8Array - converts input array into a Uint8Array
	 * Will only make a change for an ArrayBuffer, otherwise
	 * the return value is unmodified
	 */
	static makeUint8Array( array ) {
		let result = array;
		let arrayType = type(result);

		if( arrayType !== 'Uint8Array' ) {

			if( arrayType === 'ArrayBuffer' /*|| arrayType === 'Array'*/ ) {
				result = new Uint8Array(result);
			}

			// can add other typed arrays as || here
			else if( arrayType === 'Int32Array' ) {
				result = new Uint8Array( result.buffer, result.byteOffset, result.byteLength );
			}

			// TODO: add other formats here

			else {
				throw new Error(`ArrayHelper.makeUint8Array unhandled array type ${arrayType}`);
			}

		}

		return result;
	}

	/**
	 * makeModulo16 - truncates a uint8Array to modulo-16
	 *
	 * Returns obj with { data,truncated }, where truncated
	 * is a bool indicating if truncation occurred
	 *
	 * input must be Uint8Array.
	 */
	static makeModulo16(data) {
		if( type(data) !== 'Uint8Array' ) {
			throw new Error( `ArrayHelper.makeModulo16 data must be Uint8Array {${type(data)}}`);
		}

		let myData = data;
		let truncated = false;

		let len = data.length;
		let lenMod16 = len % 16;

		if( lenMod16 !== 0 ) {
			myData = myData.subarray(0, len - lenMod16);

			// we need to add padding because we truncated.
			truncated = true;
		}

		return { data : myData, truncated };
	}

	/**
	 * makeUint8ArrayFromTwo - efficiently concatenates two Uint8Arrays and returns the new array
	 *
	 * Returns newly created Uint8Array
	 *
	 * all input paramters must be Uint8Arrays.
	 */
	static makeUint8ArrayFromTwo(a, b) {

		// allocate a Uint8Array with enough capacity to hold both arrays
		let resultArray = new Uint8Array( a.length + b.length);

		resultArray.set( a, 0 );
		resultArray.set( b, a.length );

		return resultArray;
	}

	/**
	 * makeUint8ArrayFromUint8ArrayArray - efficiently concatenates zero or more Uint8Arrays in an Array and returns the new array
	 *
	 * arrays: Uint8Array[]
	 * Returns Uint8Array
	 *
	 * all input paramters must be Uint8Arrays.
	 */
	static makeUint8ArrayFromUint8ArrayArray( arrays ) {

		// calculate total length of all input arrays
		let totalLength = arrays.reduce( (acc, ele) => acc + ele.length, 0 );

		// allocate a Uint8Array with enough capacity to hold all the input arrays
		let resultArray = new Uint8Array(totalLength);

		// iteratively set the output array to the the input arrays contents
		arrays.reduce((offset, ele) => {
			resultArray.set( ele, offset );

			return offset + ele.length;
		}, 0);

		return resultArray;
	}

	/**
	 * makeUint8ArrayFromMany - efficiently concatenates zero or more Uint8Arrays and returns the new array
	 *
	 * Returns Uint8Array
	 *
	 * all input paramters must be Uint8Arrays.
	 */
	static makeUint8ArrayFromMany(...arrays) {
		return ArrayHelper.makeUint8ArrayFromUint8ArrayArray(arrays);
	}
}

export default ArrayHelper;
