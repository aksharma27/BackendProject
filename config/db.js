const mongoose = require('mongoose');
const DB = process.env.DB;

const dbConnnect = () =>{
    mongoose.set("strictQuery", true);

    mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("Database connnected");
    }).catch((e)=>{
        console.log("ERROR : " + e);
    });
}

module.exports = dbConnnect;