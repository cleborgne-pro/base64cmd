# Base64Cmd - Encode and decode string in your terminal #

Encode/decode string directly in your terminal.

Thanks to [nodejs-base64](https://www.npmjs.com/package/nodejs-base64)

## Installation ##

Install from command line:

```
npm i -g base64util
```

## Usage ##

Encode string:
```bash
base64encode youmakemyday
String: youmakemyday
Base64: eW91bWFrZW15ZGF5
```

Decode base64 string:
```bash
base64decode eW91bWFrZW15ZGF5
Base64: eW91bWFrZW15ZGF5
String: youmakemyday
```

## Requirements ##

Tested on Node 16