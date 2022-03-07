const mongoose = require('mongoose');
const clubSchema = new mongoose.Schema({
    name: {type:String},
    league: {type:String},
    country: {type:String}
});

//Creating class -- will be stored in 'articles' collection.
const Club = mongoose.model("Club", clubSchema);
module.exports = Club;
