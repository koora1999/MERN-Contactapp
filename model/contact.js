//load the mongoose
const mongoose = require("mongoose")

//create schema to initialise the datatypes of the crendentials
const contentSchema = new mongoose.Schema({
    name:String,
    email:String,
    role:String,
    company:String,
    companyaddress:String,
    
})

//exports the database
module.exports=mongoose.model("store_content",contentSchema)