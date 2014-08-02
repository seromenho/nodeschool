var url = require('url'),
http = require('http'),
port = process.argv[2];

var apiUnix = function(date){
return { 
unixtime : date.getTime() 
};
};
var apiParse = function(date){
return {
hour: date.getHours(),
minute: date.getMinutes(),
second: date.getSeconds()
};
};

var server = http.createServer(function(req, res){
var parseUrl = url.parse(req.url, true),
body = '';
var date = new Date(parseUrl.query.iso);	

if (/^\/api\/parsetime/.test(req.url)){
body = apiParse(date);
}
else if (/^\/api\/unixtime/.test(req.url)){
body = apiUnix(date);
}

if(body){
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(body));  
} else {
res.writeHead(404);
res.end();
}

});
server.listen(port);