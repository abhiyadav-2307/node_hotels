// function sum(a,b){
//     return a+b;
// }

// var add=function(a,b){
//     return a+b;
// }

// var add=(a,b)=>{
//     return a+b;
// }

// var add=(a,b)=>a+b;

// console.log("hello here is the types of writing a functions in javascript");

// const fs = require("fs");
// const os = require("os");
// var user = os.userInfo();
// // console.log(useros);

// fs.appendFile("greeting.txt", "\n Hii" + user.username + "\n", () => {
//   console.log("file is created");
// });

// const index=require('./index.js');
// console.log(index.add(3,5));
// // console.log(index);

const express=require('express');
const app=express();
app.get('/',function(req,res){
    res.send("hello world")
})
app.get('/chawal',function(req,res){
    res.send("Sure chawal is on the way..>!")
})
app.listen(3000,()=>{
    console.log("server is running...")
});