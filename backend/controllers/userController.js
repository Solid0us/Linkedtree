exports.getAllUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'You have reached an endpoint!!!!'
    })
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
