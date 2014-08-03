dbh = require('dbHandler')

var name = dbh.name();
console.log("Project name is: " + name);

r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  if(err) throw err;
  r.dbList().run(conn, function(err, dbs) {
  	if(err) throw err;
	console.log("Got DB list");
	if (dbs.indexOf(name) > -1) {
		console.log("Db exists");
	} else {
		console.log("Db does not exist");
		r.dbCreate(name)	
	}
  });
});
  	/*
});

  ('test').tableCreate('tv_shows').run(conn, function(err, res) {
  #  if(err) throw err;
    console.log(res);
    r.table('tv_shows').insert({ name: 'Star Trek TNG' }).run(conn, function(err, res)
    {
      if(err) throw err;
      console.log(res);
    });
  });
});
*/