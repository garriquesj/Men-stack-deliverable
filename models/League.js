const { Mongoose } = require("mongoose");

const require("mongoose");
const Schema = Mongoose.Schema;

const leagueSchema = new Schema({ 
    name: {type:String},
    country: {type:String},
    image: {type:String}
});

//Creating class -- will be stored in 'articles' collection.
const League = mongoose.model("League", leagueSchema);
module.exports = League;