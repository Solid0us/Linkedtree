const db = require("../models");
const Link = db.link;
const User = db.user;

exports.getAll = async (req, res) => {
    try {
        const links = await Link.findAll();
        res.status(200).json({
            status: 'success',
            message: links
        })
    } catch (err) {
        res.status(404).json({
            status: 'failure',
            message: "Could not fetch API"
        })
    }

};

exports.getAllLinksByUserID = async (req, res) => {
    try {
        const userID = await User.findOne({
            where: {
                id: req.params.id
            }
        })
        // If user ID is not found
        if (userID.length < 1) {
            return(
                res.status(404).json({
                    status: 'failure',
                    message: `User with ID ${req.params.id} could not be found.`
                })
            )
        } else {
            const links = await Link.findAll({
                where: {
                    user_id: req.params.id
                }
            })
            return(
                res.status(200).json({
                status: 'success',
                message: links
                })
            )
        }

    } catch (err) {
        res.status(200).json({
            status: 'failure',
            message: err
        })
    }
};

exports.createLinkByUserID = async (req, res) => {
    try {
        const existingUser = await Link.findOne({
            where: {
                id: req.params.id
            }
        })
        if (existingUser) {
            const createLink = await Link.create({
                user_id: req.params.id,
                link: req.body.link,
                image: req.body.image && req.body.image.length > 0 ? req.body.image : null
            });
            res.status(200).json({
                status: "success",
                message: createLink
            });
        } else {
            res.status(400).json({
                status: "failure",
                message: `User with ID ${req.params.id} was not found!`
            });
        }
    } catch (err) {
        res.status(400).json({
            status: "failure",
            message: err
        })
    }
};

exports.getLinkByID = async (req, res) => {
    try {
        const link = await Link.findOne({
            where: {
                id: req.params.id
            }
        })
        if (link) {
            res.status(200).json({
                status: 'success',
                message: link
            });

        } else {
            res.status(404).json({
                status: 'failure',
                message: `Link with ID ${req.params.id} was not found!`
            });
        }
    } catch (err) {
        res.status(404).json({
            status: 'failure',
            message: 'Had trouble finding link ID!'
        });
    }
};

exports.deleteLink = async (req, res) => {
    try {
        const existingLink = await Link.destroy({
            where: {
                id: req.params.id
            }
        })
        if (existingLink) {
            res.status(200).json({
                status: 'success',
                message: `Link with ID ${req.params.id} has been deleted!`
            });
        } else {
            res.status(400).json({
                status: 'failure',
                message: `Link with ID ${req.params.id} does not exist!`
            });
        }
    } catch (err) {
        res.status(400).json({
            status: 'failure',
            message: 'Had trouble deleting link.'
        });
    }
};

exports.hideShowLinkByID = async (req, res) => {
    try {
        const existingLink = await Link.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!existingLink) {
            return res.status(400).json({status: 'failure', message: `Could not find link with ID ${req.params.id}!`});
        } else {
            let hiddenMessage;
            existingLink.hidden ? hiddenMessage = "shown" : hiddenMessage = "hidden"
            const showHide = await Link.update({
                hidden: !existingLink.hidden
            },
            {
                where: {
                    id: req.params.id
                }
            });
            return res.status(201).json({status: 'success', message: `Link with ID ${req.params.id} has been ${hiddenMessage}!`});
        }

    } catch (err) {
        res.status(400).json({
            status: 'failure',
            message: 'Could not show/hide link'
        });
    }
};