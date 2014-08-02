var http = require('http');
var args = process.argv;
var url = args[2];

http.get(url, function(res) {
	// we want to get the data as utf8 strings
	// If you don't set an encoding, then you'll get Buffer objects
	res.setEncoding('utf8');

	// Readable streams emit 'data' events once a listener is added
	res.on('data', function (chunk) {
		console.log(chunk);
	});

	res.on('error', function (chunk) {
		console.error;
	});

});