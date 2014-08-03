r = require('rethinkdb')
http = require('http');
path = require('path')

      var temp = path.dirname(require.main.filename);
      var dbName = path.basename(temp);

    r.connect({ host: 'localhost', port: 28015, db: 'management' }, function(err, conn) {
      if(err) throw err;
      json = { name : "Michaelangelo" };
      r.table('nodes').insert(json).run(conn, function(err) {
        if(err) throw err;
      });
    });

/*// Server code
http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);*/

/* Client code

var options = {
  host: "localhost",
  port: 8888,
  path: '/whatami',
  method: 'POST'
};

http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).end();

*/