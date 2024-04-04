const mongoose=require('mongoose');
const personSchema=new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    age:{
        type: Number
    },
    work:{
        type: String,
        enum:["chef","owner","manager","waiter"],
        require:true
    },
    mobile:{
        type: String,
        unique:true
    },
    email:{
        type: String,
        unique:true
    },
    address:{
        type: String,
        require:true
    },
    sallary:{
        type: Number,
        require:true
    }

});


//create model--
const person=mongoose.model('person',personSchema);
module.exports=person;
