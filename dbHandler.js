module.exports = {
	name: function() {
    	r = require('rethinkdb')
		http = require('http');
		path = require('path')

    	var temp = path.dirname(require.main.filename);
    	var result = path.basename(temp);
    	return String(result);
	}
};

//fs = require("fs");
//args = process.argv.slice(2);
//console.log(args)

// grab path of where it's running and thing 
//in the directory above you will be the app id

// from within the module can I get the path of 
