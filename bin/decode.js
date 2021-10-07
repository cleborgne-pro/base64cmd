#!/usr/bin/env node

var base64util = require('../lib/index.js');

var args = process.argv.splice(process.execArgv.length + 2);

if (args.length !== 1) {
    console.error('Please input your base64 string to be decode');
} else {
    var base64 = args[0];
    console.log('\r\nDecode');
    console.log('Base64:', base64);
    var string = base64util.decode(base64);
    console.log('String:', string);
}
