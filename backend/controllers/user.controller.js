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

exports.createUser = async (req, res) => {
    try {
        const createdUser = await User.create({
            username: req.body.username,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        })
        res.status(201).json({
            status: 'success',
            message: req.body
        })
    } catch (err) {
        res.status(400).json({
            status: 'failure',
            message: err
        })
    }
    
}

exports.getUser = (req,res) => {
    res.status(200).json({
        status: 'success',
        message: 'You have reached the getUser endpoint!'
    })
}

exports.deleteUser = async (req, res) => {
    try{
        const existingUser = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        if (existingUser) {
            const deletedUser = await User.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({
                status: 'success',
                message: `User with ID ${req.params.id} has been deleted.`
            })
            
        } else {
            res.status(400).json({
                status: 'failure',
                message: `User with ID ${req.params.id} does not exist!`
            })
        }
    } catch (err) {
        res.status(400).json({
            status: 'failure',
            message: "Could not delete user."
        });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const existingUser = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        if (existingUser) {
            const updateUser = await User.update({
                username: req.body.username && req.body.username.length > 0 ? req.body.username : existingUser.username,
                first_name: req.body.first_name && req.body.first_name.length > 0 ? req.body.first_name : existingUser.first_name,
                last_name: req.body.last_name && req.body.last_name.length > 0 ? req.body.last_name : existingUser.last_name,
                email: req.body.email && req.body.email.length > 0 ? req.body.email : existingUser.email
            },
            {
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({
                status: 'success',
                message: `User with ID ${req.params.id} has been updated.`
            })
            
        } else {
            res.status(400).json({
                status: 'failure',
                message: `User with ID ${req.params.id} does not exist!`
            })
        }
    } catch (err) {
        res.status(400).json({
            status: 'failure',
            message: "Could not update user."
        })
    }
}
