const userModel = require('../models/usermodel');

const view = (req, res) => {
    userModel.find({})
        .then((record) => {
            return res.render('view', {
                record
            });
        }).catch((error) => {
            console.log(error);
            return false;
        })
}
const add = (req, res) => {
    return res.render('add');
}

const addRecord = (req, res) => {
    userModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        hobby: req.body.hobby,
        city: req.body.city,
        phone: req.body.phone,
        image: req.file.path,
    }).then((sucess) => {
        console.log('sucessfully added');
        return res.redirect('/user');
    }).catch((error) => {
        console.log(error);
        return false;
    })
}

const deleteRecord = (req, res) => {
    userModel.findByIdAndDelete(req.query.delid)
        .then((record) => {
            console.log("delete sucessfully");
            return res.redirect('/user');
        }).catch((error) => {
            console.log(error);
            return false;
        })
}

module.exports = {
    view, add, addRecord, deleteRecord
}

