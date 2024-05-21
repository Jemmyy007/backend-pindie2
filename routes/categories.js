const {sendAllCategories, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted} = require("../controllers/categories");
const {findAllcategories, createCategory, updateCategory, deleteCategory} = require("../middlewares/categories");

const categoriesRouter = require("express").Router();

categoriesRouter.get("/categories", findAllcategories, sendAllCategories)
categoriesRouter.post("/categories", createCategory, sendCategoryCreated)
categoriesRouter.put("/categories/:id", updateCategory, sendCategoryUpdated)
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted)


module.exports = categoriesRouter;