require 'rubygems'
require 'rethinkdb'
include RethinkDB::Shortcuts
		
conn = r.connect(:host => 'localhost', :port => 28015, :db => 'management').repl

r.table('nodes').changes().filter{|row| # catches only changes that add/delete nodes
		(row['old_val'].eq(nil) || row['new_val'].eq(nil))
	}.run(conn).each{|change| 
	p(change)
	# every change here should lead us to rewrite the nginX config
	# /etc/nginx/sites-enabled/app.conf
	config = ""
	
	conf = File.open('./app.conf').read
	conf.each_line do |li|
		config += li
  		if (li['An'])
  			puts "found beginning of config section: add an ip address here"
  			config += "Updated"
  		end
	end

	puts config
	# edit config
	File.write('./app.conf', config)

	exec '/etc/init.d/nginx reload'
}