var net = require('net');
var strftime = require('strftime');
var args = process.argv;
var port = args[2];

var server = net.createServer(function (socket) {
	var d = new Date();
    socket.end(strftime('%F %R', d) + '\n');
});
server.listen(port);