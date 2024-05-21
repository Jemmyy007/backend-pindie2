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

// const findCategoryById = async(req, res, next) =>{
//     try{
//         req.category = await category.findById(req.params.id)
//         next();
//     } catch(err){
//         res.send(404).send({message: "Игра не найдена"})
//     }
// }

const updateCategory = async(req, res, next) =>{
    try{
       req.category = await category.findByIdAndUpdate(req.params.id, req.body)
       next();
    } catch(err){
        res.send(400).send({message: "Ошибка в обновлении"})
    }
}

const deleteCategory = async(req, res, next) =>{
    try{
       req.category = await category.findByIdAndDelete(req.params.id)
       next();
    } catch(err){
        res.send(400).send({message: "Ошибка в удалении"})
    }
} 

module.exports = {findAllcategories, createCategory, updateCategory, deleteCategory};