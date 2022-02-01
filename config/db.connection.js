// ---require mongoose---
const mongoose =require ('mongoose');
// ---make connection string a variable---
const connectionStr = 'mongodb://localhost:27017/artspark';
// ----data base will be called artspark----
// ---connect to mongodb to mongoose using this path 'mongodb://localhost:27017/artspark'??----
mongoose.connect(connectionStr)
//---if mongoose connected show date/time "Mongo db connected"---
mongoose.connection.on('connected', () => {
  console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`); 
});
// ---show error is an error occurs---
mongoose.connection.on('error', (error) => {
  console.log('MongoDB connection error 😥', error);
});
// ---show when server is disconnected---
mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected  ⚡️ 🔌 ⚡️'));