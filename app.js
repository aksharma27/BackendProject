const express = require('express');
const dotenv = require('dotenv');
dotenv.config();



const app = express();


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