// ---require mongoose---
const mongoose = require("mongoose")
//mongoose.schema is a constructor function for building Schemas
const Schema = mongoose.Schema; 
//  use 
// 

// Schema: A Schema is a diagram or blueprint for what every object in the noSQL database will contain.
const artWorkSchema = new Schema({
    name: {
        type: String, required: true
    }, 
    // { type: String, required: true, unique: true }experment with later    
    medium: {
        type: String, required: true 
    },
    pieces: [{String}],
    date: {
        type: Date, required: true
    },
    email: {
        type: String, required: true, unique: true 
    },
    numberOfPeices: {
        type: Number, required: true
    },
});
// ---will automatically be stored in 'artWork' collection. ----
// ---set ArtWorkvariable to = model , now i can seed my artist data and it will be formatted this way----
const ArtWork = mongoose.model("ArtWork", artWorkSchema);
// ---export model---
module.exports = ArtWork;