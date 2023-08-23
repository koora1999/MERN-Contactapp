

const express = require("express")

const router = express.Router()

//load mongoose database
const contentmongoose = require("../model/contact")

//save the data in backend
router.post("/save",function(req,res){
    let {name,email,role,company,companyaddress} = req.body

    let content = new contentmongoose({name,email,role,company,companyaddress})

    content.save().then(function(content){
        res.send(content)
    }).catch(function(err){
        res.send({message:"error occured"})
    })
})

//get the data
router.get("/get",function(req,res){
    contentmongoose.find({}).then(function(content){
        res.send(content)
    }).catch(function(err){
        res.send(err)
    })
})



module.exports= router