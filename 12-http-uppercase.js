var fs = require('fs');
var http = require('http');
var args = process.argv;
var port = args[2];

var server = http.createServer(function(req, resp){
	var map = require('through2-map');
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(resp);
});
server.listen(port);
