var fs = require('fs');
var http = require('http');
var args = process.argv;
var port = args[2];
var filetoserve = args[3];
var server = http.createServer(function(req, resp){
	var filestream = fs.createReadStream(filetoserve);
	filestream.pipe(resp);
});
server.listen(port);
