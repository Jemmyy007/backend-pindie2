const {sendAllCategories, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted} = require("../controllers/categories");
const {findAllcategories, createCategory, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName} = require("../middlewares/categories");

const categoriesRouter = require("express").Router();

categoriesRouter.get("/categories", findAllcategories, sendAllCategories)

categoriesRouter.post(
    "/categories",
    findAllcategories,
    checkIsCategoryExists,
    checkEmptyName,
    createCategory,
    sendCategoryCreated
  );


categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  updateCategory,
  sendCategoryUpdated
); 
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted)


module.exports = categoriesRouter;