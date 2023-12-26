require('dotenv').config();
const express= require('express')
const app= express()

var mongoose=require('mongoose')
const bodyParser = require("body-parser");
const register = require("./models/registerSchema"); 

mongoose.connect(process.env.mongo_url, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   });
   const cors = require("cors");
   app.use(cors())
   app.post("/register", async (req, res) => {
     try {
       const newUser = new User(req.body);
       await newUser.save();
       res.status(201).json({ message: "User registered successfully" });
     } catch (error) {
       console.error("Error while saving user:", error.message);
       res.status(500).json({ error: "Internal server error" });
     }
   });
   
   app.get("/register", async (req, res) => {
     try {
       const users = await User.find(); // Retrieve all users from the database
       res.status(200).json(users);
     } catch (error) {
       console.error("Error while fetching users:", error.message);
       res.status(500).json({ error: "Internal server error" });
     }
   });
   


app.listen(3000,(req,res)=>{
     console.log("Server is running on http://localhost:3000")
})