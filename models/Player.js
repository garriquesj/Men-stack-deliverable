const { Mongoose } = require("mongoose");

const require("mongoose");
const Schema = Mongoose.Schema;

const playerSchema = new Schema({ 
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
