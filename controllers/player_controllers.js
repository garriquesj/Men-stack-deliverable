const express = require('express');
const router = express.Router();
const { Player } = require("..model");


// index route
router.get('/', (req, res) => {
    Player.find({}, (error, player)=>{
      if (error) {
        console.log(error);
      }
    const context = {players:player}
      res.render('index.ejs', { players: context });
  });
});
  // New  Form
  router.get('/new', (req, res) => {
    res.render('new.ejs');
  });
  
  // Create new 
  router.post('/create', (req, res) => {
    Player.create(req.body, (error, createdPlayers) => {
      if (error) return console.log(error);
  
      console.log(createdPlayers);
      return res.redirect('/players');
    });
  });
  
  Player.deleteMany({}, (error, deletedPlayer) => {
    if (error) console.log(error);
    Player.insertMany(
      [
        {
          name: 'Lionel Messi',
          age: 34,
          position: "Right-wing, mid-field",
          team: 'paris San Germain',
          country: 'Argentina',
          image: 'https://i.guim.co.uk/img/media/a7fe7170defa865d2b96b829f05c5d8fa82d8edf/0_20_2201_1321/master/2201.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=72bbae118ff1631bcc0d1f837159a727'
        },
        { 
          name: "Cristiano Ronaldo",
          age: 'Cybertruck',
          position: 'Striker',
          team:'Manchester United',
          country:"Portugual",
          image:"https://pbs.twimg.com/media/FGWjelYXIA4oc_E.jpg"
        },
        {
          name: "Neymar da Silva",
          age: "27",
          position: 'Winger',
          team:"Paris San Germain",
          country:"Brazil",
          image:"https://cdn.cnn.com/cnnnext/dam/assets/211011090701-neymar-super-tease.jpg"
        }
      ],
      function (error, createdPlayer) {
        if (error) {
          return console.log(error);
        }
        console.log("=== Seed Complete ===");
        console.log(createdPlayer);
      }
    );
    console.log(deletedPlayer);
  });
  // show route
  router.get('/:playerId', (req, res) => {
    if (error) {
      console.log(req.params)
      console.log(error);
      const context = { error: error };
      return res.status(404).render("404", context);
  }
  /*
  1. the first param of render() is the .ejs file
  that we want to inject data into.
  2. the second param is the data that we want
  to inject into the .ejs file (it must be an object)
  */

  /*
  there will be a variable available inside
  the show.ejs file called Car,
  and its value the foundItem
 */
  res.render('show.ejs', {player: foundPlayer});
});

router.delete('/:playerId', (req, res) => {
Car.findByIdAndDelete(req.params.playerId, (error, deletedPlayer) => {
  if(error) {
      console.log(error);
      res.send(error);
  }

  console.log(deletePlayer);
  res.redirect('/player')
  })
})

router.get('/:playerId/edit', (req, res) => {
Car.findById(req.params.playerId, (error, updatedPlayer) => {
  if(error) console.log(error);

  console.log(updatedPlayer);
  res.render('edit.ejs', { car: updatedPlayer})
})
})
router.put('/:playerId', (req, res) => {
console.log(`The request is ${req}`)
// console.log(`The request's body is ${req.body}`)

Player.findByIdAndUpdate(req.params.playerId, req.body,(error, updatedPlayer) => {
  if (error) return console.log(error);

  console.log(updatedPlayer);

  return res.redirect('/player');
});
});

module.exports = router;