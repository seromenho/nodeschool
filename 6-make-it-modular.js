var filteredls = require('./6-filtered.js');

var args = process.argv;
var dir = args[2];
var ext = args[3];
var j;
filteredls(dir, ext, function(err, data){
	data.forEach(function(file){
	    console.log(file);
	});
});
