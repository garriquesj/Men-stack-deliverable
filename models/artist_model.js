
// ODM stands for Object Document Model. 
// It translates the “documents” being stored in Mongo into fancier JS objects,
// that have more helpful methods and properties. 
// The ODM that we will use with MongoDB is Mongoose.
// ---require mongoose---
const mongoose = require("mongoose")
//mongoose.schema is a constructor function for building Schemas
const Schema = mongoose.Schema; 
//  use 
// 

// Schema: A Schema is a diagram or blueprint for what every object in the noSQL database will contain.
const artistSchema = new Schema({
    name: {
        type: String, required: true
    }, 
    // { type: String, required: true, unique: true }experment with later    
    medium: {
        type: String, required: true 
    },
    pieces: [{
        String
    }],
    images: [{
        String
    }],
    age: {
        type: Date, required: true,min: '2002-01-1',//age minimum test
    },
    email: {
        type: String, required: true, unique: true 
    },
    numberOfPeices: {
        type: Number
    }
});
// ---will automatically be stored in 'artist' collection. ----
// ---set Artist variable to = model , now i can seed my artist data and it will be formatted this way----
const Artist = mongoose.model("Artist", artistSchema);
// ---export model---
module.exports = Artist;