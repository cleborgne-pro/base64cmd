// ./lib/index.js
const { base64encode, base64decode } = require('nodejs-base64');


/**
 * Encode string in base64
 * 
 * @param {String} String string to encode
 */
var encode = function(string) {
    return base64encode(string);
};

/**
 * Decode string in base64
 * 
 * @param {String} String string to decode
 */
 var decode = function(string) {
    return base64decode(string);
};

exports.encode = encode;
exports.decode = decode;