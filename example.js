dbh = require('dbHandler')

var name = dbh.init(); // always call init first
console.log("Application name: " + name);

//dbh.tableCreate(name, "table1");
dbh.insert(name, "table1", { name : "Michaelangelo" });

// These are supposed to print whats in the db
r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  r.db(name).table('table1').run(conn, function(err, cursor) {
      if (err) throw err;
      cursor.toArray(function(err, result) {
          if (err) throw err;
          console.log(JSON.stringify(result, null, 2));
      });
  });
});

//dbh.delete(name, "table1", "2f47ebcd-cae7-4d45-8f83-fff1cab8f33e");
//dbh.tableDrop(name, 'table1');

r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  r.db(name).table('table1').run(conn, function(err, cursor) {
      if (err) throw err;
      cursor.toArray(function(err, result) {
          if (err) throw err;
          console.log(JSON.stringify(result, null, 2));
      });
  });
});

// TODO have this connection code as part of the exported
// module so we just touch things through that

/*

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