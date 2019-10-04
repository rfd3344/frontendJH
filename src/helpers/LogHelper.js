import { logger } from '../hlsjs/utils/logger';

class LogHelper {

	/**
		Trying to reduce the duplicated logging code...
	 */

	//TODO: fix what is causing pos to be null/undefined, as that shouldn't be happening
	static loading(message, frag, levelOrTrack, levelDetails, pos, desiredTime) {
		try {
			logger.log(`${message} ${frag.sn} of [${levelDetails.startSN}, ${levelDetails.endSN}] in ${levelOrTrack} pos:${pos} desired:${desiredTime} url: ${frag.relurl}`);
		}
		catch(err) {
			logger.warn('error occurred while logging start of frag load');
		}
	}
}

export default LogHelper;
