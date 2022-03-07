const express = require('express');
const app = express();
const controllers = require('./controllers')
const methodOverride = require('method-override')

	
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride('_method'))

app.use('/players', controllers.player)
// Configure the app (app.set)
app.set('view engine', 'ejs'); 
app.use(express.static('public'));
	
	
// Mount middleware (app.use)
	
	
// Mount routes
//home
app.get('/', function(req,res)
{res.send('<h1>Hello World</h1>')
});
//index
app.get("/players/", (req, res) => {
  const allPlayers = players.find();
  /* 
      1. the first param of render() is the .ejs file 
      that we want to inject data into.

      2. the second param is the data that we want 
      to inject into the .ejs file (it must be an object)
  
      there will be a variable available inside
      the show.ejs file called product, 
      and its value the foundItem
  */
      const context = { players: allPlayers };
      res.render('index.ejs', context);

});

app.get("/*", (req, res) => {
  const context = { error: req.error };
  return res.status(404).render("404", context);
});

	
// Tell the app to listen on port 4000
app.listen(4000, function() {
    console.log('Listening on port 4000');
});