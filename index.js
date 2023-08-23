

const express = require("express")

const app = express();
const cors = require("cors")

//node.js body parsing middleware we can get the content in req.body
const bodyparser = require("body-parser")

//import mongoose
 const mongoose = require("mongoose")

 //load the express router
 const contentrouter = require("./router/contact")

// //give connection
mongoose.connect('mongodb://0.0.0.0:27017/Display_content');



app.use(cors())//when we are making requesting from one port to another port we have to load the cors

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


//if the server is getting request then the request sent to the contentrouter
app.use("/",contentrouter)

//port number
app.listen(7000, function () {
    console.log("server started")
})

