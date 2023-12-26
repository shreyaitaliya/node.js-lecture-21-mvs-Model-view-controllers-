const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/mvcCrude");

const db = mongoose.connection;

db.on('connected', (error) => {
    if (error) {
        console.log(error);
        return false;
    }
    console.log("DB is start");
})
module.exports = db;