var args = process.argv;
var fs = require('fs');
var buf = fs.readFile(args[2], function(err, data){
	if (err) throw err;
	var lines = data.toString().split('\n').length - 1;
	console.log(lines);	
});