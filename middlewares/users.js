const user = require("../models/user")

const findAllusers = async(req, res, next) =>{
    req.usersArray = await user.find({})
    next();
}

module.exports = findAllusers;