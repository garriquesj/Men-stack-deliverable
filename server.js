//install express,node, make gitignore
// require node modules
const express = require('express');
//make the 'server'
const app = express();
const PORT = 1000;
// server.listen() method creates a listener on the specified 'port' or path.
app.listen(PORT, () => console.log(`port is working ${PORT}`));
// Configure the app (app.set)
	
	
// Mount middleware (app.use)
	
	
// Mount routes
app.get('/', function(req, res) {
    res.send('<h1>Home Page</h1>');
  });
	
// Tell the app to listen on port 4000


