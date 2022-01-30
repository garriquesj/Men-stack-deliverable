// ---require mongoose---
const mongoose = require("mongoose")
//mongoose.schema is a constructor function for building Schemas
const Schema = mongoose.Schema; 
//  use 
// 

// Schema: A Schema is a diagram or blueprint for what every object in the noSQL database will contain.
const artWorkSchema = new Schema({
    title: {
        type: String, required: true
    }, 
    // { type: String, required: true, unique: true }experment with later    
    artist: {
        type: String, required: true 
    },
    medium: {
        type: String, required: true 
    },
    date: {
        type: Date, required: true
    },
    image: {
        type: String
    },

});

// module.exports = new Collection(ArtWork [
//     {
//     title: 'EiskalterEngel18',  
//     artist: 'EiskalterEngel18', 
//     medium:'Digital Art',
//     date:  "Jan 15, 2022",
//     image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/dey5x2f-172149ca-6b99-4bf8-a922-643cdf87019f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjNDcxOTRjLTQzODktNDBiMi1iMTMwLWUzZGU3NmRiNGVhMFwvZGV5NXgyZi0xNzIxNDljYS02Yjk5LTRiZjgtYTkyMi02NDNjZGY4NzAxOWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Mg1JKRbvqvNGhS6YhkIBt6dgnauXKKgnEtfBy3v79aI",
//         }  
//     ] 
// );
// ---will automatically be stored in 'artWork' collection. ----
// ---set ArtWorkvariable to = model , now i can seed my artist data and it will be formatted this way----
const ArtWork = mongoose.model("ArtWork", artWorkSchema);
// ---export model---
module.exports = ArtWork;