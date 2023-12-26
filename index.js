const express = require('express');

const port = 8000;

const app = express();

app.use(express.urlencoded());
const path = require('path');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.set('view engine', 'ejs');

app.use('/', require('./routes/indexRoutes'));

const db = require('./config/db');

const crud = require('./models/usermodel');

app.listen(port, (error) => {
    if (error) {
        console.log(error);
        return false;
    }
    console.log(`server is start on port :- ${port}`);
})