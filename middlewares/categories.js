const category = require("../models/category")

const findAllcategories = async(req, res, next) =>{
    req.categoriesArray = await category.find({})
    next();
}

const checkEmptyName = async (req, res, next) => {
    if (!req.body.name) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Введите название категории" }));
    } else {
      next();
    }
  }; 

const checkIsCategoryExists = async (req, res, next) => {
    const isInArray = req.categoriesArray.find((category) => {
      return req.body.name === category.name;
    });
    // Если нашли совпадение, то отвечаем кодом 400 и сообщением
    if (isInArray) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Категория с таким названием уже существует" }));
    } else {
      next();
    }
  }; 

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

const checkIfCategoriesAvaliable = async (req, res, next) => {
  if (!req.body.categories || req.body.categories.length === 0) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Выберите хотя бы одну категорию" }));
  } else {
    next();
  }
};

module.exports = {findAllcategories, createCategory, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName, checkIfCategoriesAvaliable};