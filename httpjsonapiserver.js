var url = require('url'),
	http = require('http'),
	args = process.argv,
	port = args[2];

var server = http.createServer(function(req, res){
	endpoint = url.parse(req.url, true);
	str = JSON.stringify(endpoint);
	obj = JSON.parse(str);
	console.log(obj);
	res.writeHead(200, { 'Content-Type': 'application/json' })
	
});
server.listen(port, 'localhost');

