const mongoose = require('mongoose');
const playerSchema = new mongoose.Schema({ 
    name: {type:String},
    age: {type:String},
    position: {type:String},
    team: {type:String},
    country: {type:String},
    image: {type:String}
});

//Creating class -- will be stored in 'articles' collection.
const Player = mongoose.model("Player", playerSchema);
module.exports = Player;
