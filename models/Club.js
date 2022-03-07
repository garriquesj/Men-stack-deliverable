const { Mongoose } = require("mongoose");

const require("mongoose");
const Schema = Mongoose.Schema;

const clubSchema = new Schema({ 
    name: {type:String},
    league: {type:String},
    country: {type:String}
});

//Creating class -- will be stored in 'articles' collection.
const Club = mongoose.model("Club", clubSchema);
module.exports = Club;
