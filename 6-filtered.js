module.exports = function (dir, ext, callback) {
    var fs = require('fs');
    var path = require('path');
    var list = fs.readdir(dir, function (err, files) {
	    var data = [];
	    if (err) {
	        return callback(err);
	    }
	    else{
	    	files.forEach(function(file){
			    var fileExt = path.extname(file);
			    if (fileExt === '.' + ext){
			    	data.push(file);
			    }	
			});
			callback(null,data);
	    }
	});
};