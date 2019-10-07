// node XHR, resolves to original XMLHttpRequest for browsers
import { XMLHttpRequest } from 'w3c-xmlhttprequest-plus';

class PromiseHelper {

	/**
	 * postUriAsync returns a Promise to an ArrayBuffer resulting from a postUriAsync
	 *
	 * uri is the uri to POST to
	 * message is the Uint8Array which will be posted
	 * [headers] is an optional list of {name,value} pairs to use as RequestHeaders
	 * options can contain an AbortSignal signal, which is not currently implemented
	 *
	 * Returns a Promise<ArrayBuffer> or rejects on error.
	 */

	static postUriAsync(uri, message, headers, options) { // eslint-disable-line no-unused-vars
		return new Promise( (resolve, reject) => {
			var xhr = new XMLHttpRequest();

			xhr.open('POST', uri);
			xhr.responseType = 'arraybuffer';

			xhr.onreadystatechange = () => {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
					//	console.log('## postLicenseResponse: resolve');
					//	console.log( xhr.response );
						resolve(xhr.response);
					}
					else {
						let err = new Error('postUriAsync: failed xhr : ' + xhr.status + ' ' + xhr.statusText);

						// this response object should be directly compatible with the response property on an hlsjs error
						//console.log( xhr );
						err.response = {
							url: xhr.responseURL || uri,	// Node doesn't provide responseURL
							code: xhr.status,
							text: xhr.statusText,
							data: xhr.response,
						};

					//	console.log(err);
						reject(err);
					}
				}
			};

			// TODO: eventually we want to listen to options.signal to abort.

			xhr.onerror = () => {
				let err = new Error('postUriAsync: xhr error' + xhr.statusText);
				//console.log(err);
				reject(err);
			};

			if(headers) {

				if( !Array.isArray(headers) ) {
					throw new Error(`postUriAsync: invalid request headers: ${headers}`);
				}

				if( headers.length > 0) {
					for ( const header of headers ) {

						const { name, value } = header;

						if( !name || !value) {
							throw new Error(`postUriAsync: invalid request header: ${header}`);
						}

						xhr.setRequestHeader(name, value);
					}
				}
			}

			xhr.send(message);
		});
	}

	static getUriAsync(uri, headers) {
		//logger.log('## getUriAsync: ' + uri);

		return new Promise(function ( resolve, reject) {
			var req = new XMLHttpRequest();
			req.open('GET', uri);

			if (headers && headers.length) {
				for(let i = 0; i < headers.length; i++) {
					req.setRequestHeader(headers[i].name, headers[i].value);
				}
			}

			req.responseType = 'arraybuffer';

			req.addEventListener('load', function () {
				//logger.log(`## getUriAsync: ${uri} resolved with req.response.length`);
				resolve(new Uint8Array(req.response));
			});

			req.addEventListener('error', function (e) {
				//logger.warn('## getUriAsync: ' + uri + ' err: ' + e);
				reject(e);
			});

			req.addEventListener('abort', function () {
				let err = new Error('## getUriAsync: aborted fetching ' + uri);
				//logger.log(err.message);
				reject(err);
			});

			req.send(null);
		});
	}

	/**
		When calling a user-provided Promise returning callback, you should call the function, expecting it to Resolve or Reject, or possibly Return or Throw.

		Calling the callback via promiseCall will take care of transforming a non Promise return, or a thrown exception into a resovled or rejected Promise.
		https://www.w3.org/2001/tag/doc/promises-guide#shorthand-promise-calling

		func is the function to called
		any remaining arguments are passed to the function.
	*/
	static promiseCall( func, ...args) {
		try {
			return Promise.resolve(func(...args));
		}
		catch (e) {
			return Promise.reject(e);
		}
	}


	// stalls Promise chain for millSecs milliseconds. Useful for testing race conditions
	static waitAsync( milliSecs ) {
		return new Promise( function ( resolve ) {
			setTimeout( function () {
				resolve('timeout');
			}, milliSecs );
		});
	}

}

export default PromiseHelper;
