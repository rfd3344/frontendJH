class ErrorHelper {


	// TODO: consider adding a makeDomExceptionOrError function which will generate proper TypeErrors etc when requested

	/**
	 * makeDomException - will attempt to create a platform DOMException with the name
	 * and [message] specified. If the platform does not support client creation of DOMExceptions
	 * then a simple exception will be created.
	 *
	 * ie throw makeDomException( 'AbortError', 'user aborted processing')
	 *
	 * both values are optional, and empty strings will be used if not supplied.
	 *
	 * NOTE: creation of DOMException is not supported on IE11 or Tizen 2.x, so regular simple exception will be created
	 */

	static makeDomException( name, message ) {
		let err;
		try {
			err = new DOMException( message, name);
		}
		catch (e) {
			// WebOS 3.x, IE 11 and Tizen 2.x do not support calling the DOMException constructor, use a
			// regular error object on it instead.
			// TODO: we can more fully fake a DOMException by generating a DOMException and adding some getter/setters to it
			err = new Error(message);
			// Error objects do not default undefined name to Error
			err.name = name !== undefined ? name : 'Error';
		}

		return err;
	}
}

export default ErrorHelper;
