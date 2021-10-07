#!/usr/bin/env node

var base64util = require('../lib/index.js');

var args = process.argv.splice(process.execArgv.length + 2);

if (args.length !== 1) {
    console.error('Please input your string to be encode');
} else {
    var string = args[0];
    console.log('\r\nEncode');
    console.log('String:', string);
    var base64 = base64util.encode(string);
    console.log('Base64:', base64);
}
