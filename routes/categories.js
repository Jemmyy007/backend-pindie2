const sendAllCategories = require("../controllers/categories");
const findAllcategories = require("../middlewares/categories");

const categoriesRouter = require("express").Router();
categoriesRouter.get("/categories", findAllcategories, sendAllCategories)
module.exports = categoriesRouter;