const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/sumanth");

connect.then(()=>{
    console.log("database connected successfully");
})
.catch(()=>{
    console.log("Database cant be connected");
});

const LoginSchema = new mongoose.Schema({
    name : {
        type : String,
        required :true
    },
    password : {
        type:String,
        required :true
    }
});

const collection = new mongoose.model("suman",LoginSchema);

module.exports = collection;