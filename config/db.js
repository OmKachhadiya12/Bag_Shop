const mongoose = require('mongoose');
const mongoURL = "mongodb://127.0.0.1.27017/Bag-Shop";

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Connected');
});

db.on('disconnected',()=>{
    console.log('Disconnected');
});

db.on('error',(err)=>{
    console.log('Error',err);
});

module.exports = db;