
//Much the same as...
//https://github.bamtech.co/fed-app-media-platform/bam-id3-parser/blob/master/ID3JsonParser.js

class JsonHelper {

	static getJsonFromStringJson( jsonString ) {
		let json = null;
		let string = jsonString;
		let firstBraceIndex = string.indexOf('{');

		if (firstBraceIndex > -1) {
			string = string.substring(firstBraceIndex);

			try {
				json = JSON.parse(string);
			}
			catch (e) {
				//log('ID3JsonParser.getJsonFromMetadata: error parsing JSON, error=' + e.message);
				json = null;
			}
		}

		return json;
	}

}


export default JsonHelper;
