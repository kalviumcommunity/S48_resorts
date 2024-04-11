require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const mongoDBuri = process.env.MONGODB_URI

// connecting database(mongoDB) to server

mongoose.connect(mongoDBuri)
.then(()=>{console.log("Database Connected ")})
.catch((err)=> console.error(err))

app.get("/", (req, res) => {
    res.json(`Server is running on ${port}`)
})

// get request or pong message 
app.get("/ping", (req, res) => {
    res.json("pong")
})

//get request for mongodb
app.get("/mongo", (req, res) => {
    if (mongoose.connection.readyState == 1) {
        res.json("Database Connected ")
    }else{
        res.json("Error connecting to Database")
    }
})

app.listen(port, () => {
    console.log(`🚀Server is running on port ${port}`);
  });