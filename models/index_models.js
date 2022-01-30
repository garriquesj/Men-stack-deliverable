require('../config/db.connection');

module.exports = {
    // This is exporting my Product model
   ArtWork: require('./artwork_model'),
    // This is exporting my Review model
    Artist: require('./artist_model'),
    // This is exporting my user model
    
}