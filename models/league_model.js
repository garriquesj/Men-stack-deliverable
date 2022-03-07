
const mongoose = require("mongoose");

const leagueSchema = new mongoose.Schema({ 
    name: {type:String},
    country: {type:String},
    image: {type:String}
});

//Creating class -- will be stored in 'articles' collection.
const League = mongoose.model("League", leagueSchema);
module.exports = League;