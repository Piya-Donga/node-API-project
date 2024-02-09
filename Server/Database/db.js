const mongoose = require("mongoose");
mongoose.set('strictQuery',false);

const db = mongoose.connect("mongodb://127.0.0.1:27017/std1" ,(err) =>
{
    if(!err){
        console.log("database connect..")
    }else{
        console.log("datbase not connect")
    }
})

module.exports= db