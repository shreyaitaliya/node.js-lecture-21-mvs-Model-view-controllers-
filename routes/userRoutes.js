const express = require('express');

const multer = require('multer');

const routes = express.Router();
const usercontrollers = require('../controllers/usercontrollers');

//file upload

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const fileUpload = multer({ storage: storage }).single('image');

routes.get('/', usercontrollers.view);
routes.get('/add', usercontrollers.add);
routes.post('/addRecord', fileUpload, usercontrollers.addRecord);
routes.get('/deleteRecord', usercontrollers.deleteRecord);

module.exports = routes