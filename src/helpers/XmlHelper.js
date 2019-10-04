
//Much the same as...
//https://github.bamtech.co/fed-app-media-platform/bam-id3-parser/blob/master/ID3XmlParser.js


import _ from 'lodash';

const NODE_TYPE_TEXT = 3;
const NODE_TYPE_ELEMENT = 3;


class XmlHelper {
	/**
	 * * Retrieves the XML from the ByteArray
	 * @param {Uint8Array} buffer
	 * @returns {XML} XMLDoc object or null if there was an error.
	*/
	static getXmlFromStringXml( xmlString ) {
		let parser;
		let xmlDoc;
		let string = xmlString;

		let firstBracketIndex = string.indexOf( '<?xml' );
		if ( firstBracketIndex > -1 ) {
			string = string.substring( firstBracketIndex );
			if (window) {
				if ( window.DOMParser ) {
					parser = new DOMParser();
					xmlDoc = parser.parseFromString( string, 'text/xml' );
				}
				else { // Internet Explorer
					// eslint-disable-next-line no-undef
					xmlDoc = new ActiveXObject( 'Microsoft.XMLDOM' );
					xmlDoc.async = false;
					xmlDoc.loadXML( string );
				}
			}
			return xmlDoc;
		}

		return null;
	}



	/**
	 * Generic XML->Object parsing
	 * @param xml
	 * @returns {Object}
	 */
	static parse( xml ) {
		let data = {};
		let isText = xml.nodeType === NODE_TYPE_TEXT;
		let isElement = xml.nodeType === NODE_TYPE_ELEMENT;
		let body = xml.textContent && xml.textContent.trim();
		let hasChildren = xml.children && xml.children.length;
		let hasAttributes = xml.attributes && xml.attributes.length;

		// just test, we'll keep it simple
		if ( isText ) {
			return xml.nodeValue.trim();
		}

		//IE and PhantomJS doesn't support xml.children.
		/*
		The difference between xml.children vs xml.childNodes is that xml.children only returns NODE_TYPE_ELEMENT, while xml.childNodes returns all types.
		So if we don't have children (IE / PhantomJS), lets loop through the childNodes to see if there are any Element nodes
		If there are Element nodes, add them to our local children array.
		*/
		let elementChildren = xml.children;
		if (!hasChildren) {
			elementChildren = [];
			_.each(xml.childNodes, function (child) {
				if (child.nodeType === NODE_TYPE_ELEMENT) {
					elementChildren.push(child);
					hasChildren = true;
				}
			});
		}

		// no children, no attributes...get outta here
		if ( !hasChildren && !hasAttributes ) {
			return body;
		}

		// no children? content? use that
		if ( !hasChildren && body.length ) {
			data.text = body;
		}

		// Attributes?
		if ( isElement && hasAttributes ) {
			data.attributes = _.reduce( xml.attributes, function ( obj, name, id ) {
				let attr = xml.attributes.item( id );
				obj[_.camelCase( attr.name )] = attr.value;
				return obj;
			}, {} );
		}

		// for each child recursively call parse over children & add to our collection
		_.each( elementChildren, function ( child ) {
			let name = _.camelCase( child.nodeName );
			if(name === 'markerName') {
				name = 'name';
			}

			// new node type?
			if ( !_.has( data, name ) ) {
				data[name] = XmlHelper.parse( child );
				return;
			}

			// We have this node type, create an array if it isn't already
			if ( !_.isArray( data[name] ) ) {
				data[name] = [data[name]];
			}

			// add to our collection
			data[name].push( XmlHelper.parse( child ) );
		} );

		// if we can, let's fold some attributes into the body
		_.each( data.attributes, function ( value, key ) {
			// eslint-disable-next-line no-param-reassign
			key = _.camelCase( key );
			if ( data[key] != null ) {
				return;
			}
			data[key] = value;
			delete data.attributes[key];
		} );

		// if data.attributes is now empty, get rid of it
		if ( _.isEmpty( data.attributes ) ) {
			delete data.attributes;
		}

		// simplify the object
		return XmlHelper.flatten( data );
	}


	static flatten( object ) {
		let check = _.isPlainObject( object ) && _.size( object ) === 1;
		return check ? XmlHelper.flatten( _.values( object )[0] ) : object;
	}




}


export default XmlHelper;
