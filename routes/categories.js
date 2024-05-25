const {sendAllCategories, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted} = require("../controllers/categories");
const {findAllcategories, createCategory, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName} = require("../middlewares/categories");
const { checkAuth } = require("../middlewares/auth.js");

const categoriesRouter = require("express").Router();

categoriesRouter.get("/categories", findAllcategories, sendAllCategories)

categoriesRouter.post(
    "/categories",
    findAllcategories,
    checkIsCategoryExists,
    checkEmptyName,
    checkAuth,
    createCategory,
    sendCategoryCreated
  );


categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategoryUpdated
); 
categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendCategoryDeleted)


module.exports = categoriesRouter;