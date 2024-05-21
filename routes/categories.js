const {sendAllCategories, sendCategoryCreated, sendCategoryUpdated} = require("../controllers/categories");
const {findAllcategories, createCategory, updateCategory} = require("../middlewares/categories");

const categoriesRouter = require("express").Router();

categoriesRouter.get("/categories", findAllcategories, sendAllCategories)
categoriesRouter.post("/categories", createCategory, sendCategoryCreated)
categoriesRouter.put("/categories/:id", updateCategory, sendCategoryUpdated)

module.exports = categoriesRouter;