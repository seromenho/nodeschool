var args = process.argv;
var fs = require('fs');
var buf = fs.readFileSync(args[2]);
var str = buf.toString();
var array = str.split('n');
var lines = array.length - 1;
console.log(lines);