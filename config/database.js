const mongoose = require('mongoose'); //requiring mongoose
mongoose.connect('mongodb://0.0.0.0:27017'); //connecting to mongodb
const db = mongoose.connection; //acquiring the connection

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB!')); //if error occurred
db.once('open', ()=> {
    //if connected successfully
    console.log('Successfully connected to MongoDB!');
});

module.exports = db;