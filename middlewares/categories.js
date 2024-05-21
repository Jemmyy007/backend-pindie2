const category = require("../models/category")

const findAllcategories = async(req, res, next) =>{
    req.categoriesArray = await category.find({})
    next();
}

const createCategory = async(req, res, next) =>{
    console.log("POST /categories");
    try {
        console.log(req.body);
        req.category = await category.create(req.body);
        next();
    } catch(err) {
        res.status(400).send("Error creating category")
    }
}

module.exports = {findAllcategories, createCategory};