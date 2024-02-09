const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
    name: String,
    email: String,
    password:String,
    mobile : Number,
    gender:String,
    address: String,
    city: String,
    pincode: Number,
    
});

const regModel = mongoose.model("reg_1",RegSchema);

module.exports= regModel;