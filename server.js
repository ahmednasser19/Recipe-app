const express = require('express') ; 
const mongoose = require('mongoose');
const cors = require('cors');
//adding dot env to connect our server to database
require("dotenv").config();

const app = express(); 
const port = process.env.PORT || 8080; 


// to connect my server side with client side 
app.use(cors());
app.use(express.json()); 

//use mongoose to make a connection  bt the server and mongoDB Database

const uri = process.env.MONGODB_URI; 

mongoose.connect(uri,{
    useNewUrlParser :true ,
    useUnifiedTopology: true
})

const connection = mongoose.connection; 

//test the connection 
connection.once('open' , () => {
    console.log("MongoDB connection established seccessfully!")
});

const recipeRouter = require('./routes/recipes');
app.use('/recipes', recipeRouter);

app.listen(port , ()=>  console.log(`The App is running on port : ${port}`));