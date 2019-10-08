import Utils from '../HlsUtils';
import UTF8 from 'utf-8';

class StringHelper {
	/**
	 * Creates a string filled with `n` copies of the `fill` string.
	 *
	 * @param {number} n - the number of copies of `fill`
	 * @param {string} fill - string to be used to fill the string
	 *
	 * @return {string} - the filled string
	 */
	static makeFilledString(n, fill ) {
		if( n < 0 ) {
			throw new RangeError(`StringHelper.makeFilledString: n must be >= 0, n: ${n}`);
		}
		if( !Utils.isString(fill) ) {
			throw new TypeError('StringHelper.makeFilledString: fill must be a string');
		}
		return Array.prototype.join.call( { length: n + 1 }, fill);
	}

	static arrayUtf8ToString(buffer) {
		if(global.TextDecoder) {
			let array = buffer;

			if(!array.BYTES_PER_ELEMENT) {
				array = new Uint8Array(array);
			}

			return new TextDecoder('utf-8').decode(array);
		}
		else {
			//return UTF8.getStringFromBytes(buffer);
			return UTF8.getStringFromBytes( new Uint8Array(buffer));
		}
	}

	// Chrome will reference not copy strings. flattenString forces a reallocation
	//https://bugs.chromium.org/p/v8/issues/detail?id=2869
	static flattenString( str ) {
		let result = str;

		if (typeof str === 'string') {
			result = (' ' + str).slice(1);
		}

		return result;
	}


	static strsec(theString, position, length, terminator) {
		let outstr = '';
		let thePosition = position;
		let theLength = length;
		let theTerminator = terminator;
		let endPoint = undefined;

		if (theString !== null && theString !== undefined) {
			if (thePosition === undefined) {
				thePosition = 0;
			}
			if (theLength === undefined) {
				theLength = theString.length - thePosition;
			}
			if (theTerminator === undefined) {
				theTerminator = 0;
			}

			let i = thePosition;

			for (i; i < (theLength + thePosition); i++) {
				if (theString[i] === theTerminator) {
					break;
				}
				if (theString[i] > 31 && theString[i] < 127) {
					outstr += String.fromCharCode(theString[i]);
				}
			}

			endPoint = i;
		}

		let result = { outstr, endPoint };

		return result;
	}

}

export default StringHelper;
