dbh = require('dbHandler')

var name = dbh.init(); // always call init first

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