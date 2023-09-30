const db = require("../models");
const User = db.user;

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({
            status: "Success!",
            message: users
        })
    } catch(err) {
        res.status(404).json({
            status: "Failure!",
            message: "Not found!"
        })
    }
}

exports.createUser = (req, res) => {
    res.status(201).json({
        status: 'success',
        message: 'You have created a new user!'
    })
}

exports.getUser = (req,res) => {
    res.status(200).json({
        status: 'success',
        message: 'You have reached the getUser endpoint!'
    })
}
