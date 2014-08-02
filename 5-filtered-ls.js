var fs = require('fs');
var path = require('path');
var args = process.argv;
var dir = args[2];
var ext = args[3];
var files = fs.readdir(dir, function (err, files) {
  if (err) {
    throw err;
  }
  files.forEach(function(file){
    var fileExt = path.extname(file);
    if (fileExt.match(ext)){
      console.log(file);
    }
  })
});
