const {sendAllCategories, sendCategoryCreated} = require("../controllers/categories");
const {findAllcategories, createCategory} = require("../middlewares/categories");

const categoriesRouter = require("express").Router();

categoriesRouter.get("/categories", findAllcategories, sendAllCategories)
categoriesRouter.post("/categories", createCategory, sendCategoryCreated)

module.exports = categoriesRouter;