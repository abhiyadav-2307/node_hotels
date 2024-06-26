const mongoose = require('mongoose');
require("dotenv").config();
// console.log(mongoose);
// const mongoURL='mongodb://localhost:27017/hotel';
const mongoURL=process.env.DB_URL;
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db=mongoose.connection;
db.on('connected',()=>{
    console.log("Connected to mongoBD server.");
});
db.on('error',(err)=>{
    console.log("mongoBD connection error...");
});
db.on('disconnected',()=>{
    console.log("mongoBD server disconnected!!");
});
module.exports=db;