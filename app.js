const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
require('dotenv').config({ path: 'config.env' });
const dbconn = require('./config/db');



const app = express();

app.use(express.json());
// app.use(express.urlencoded("extended: true")); 

dbconn();


app.get('/api/health', (req, res) =>{
    res.send({
        time: new Date(),
        server: "Shuffle Backend",
        status: "Active"
    });
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`App listening on ${PORT}`);
})