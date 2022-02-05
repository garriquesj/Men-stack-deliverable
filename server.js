// require node modules
const express = require('express');//make the 'express app'
const controllers = require('./controllers') //access my controllers index
// const dbConnections = require('./config/db.connection.js');
const methodOverride = require('method-override');//Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.   
const app = express();
const router = express.Router();

const PORT = 1000;


// ---import models---
// const artist =require ('./models')
// server.listen() method creates a listener on the specified 'port' or path
// Set our app-my app was working before I brought
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use("/artwork",controllers.Artwork)
app.listen(PORT, () => console.log(`port is working ${PORT}`));
// Configure the app (app.set)

// ---will automatically be stored in 'artist' collection. ----
// ---set Artist variable to = model , now i can seed my artist data and it will be formatted this way----
// const Artist = mongoose.model("Artist", artistSchema);
// ---export model---
// module.exports = Artist;
	

// Mount routes
// The get method defines a route that listens for a GET request
// app.get('/', function(req, res) {
//     res.render('home.ejs');
//   });
	

// home
app.get('/', function(req, res) {
    res.render('home.ejs');
  });
// // //index art
// app.get('/', function(req, res) {
//     res.render("art_index.ejs");
//   });
 
//   app.get('/*', function(req, res) {
//     res.redirect('/');
//   });

