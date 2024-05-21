const user = require("../models/user")

const findAllUsers = async(req, res, next) =>{
    req.usersArray = await user.find({})
    next();
}


const createUser = async(req, res, next) =>{
    try {
        console.log(req.body);
        req.user = await user.create(req.body);
        next();
    } catch(err) {
        res.status(400).send("Error creating user")
    }
}
module.exports = {findAllUsers, createUser};