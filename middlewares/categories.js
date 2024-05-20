const category = require("../models/category")

const findAllcategories = async(req, res, next) =>{
    req.categoriesArray = await category.find({})
    next();
}

module.exports = findAllcategories;