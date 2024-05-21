const { sendAllUsers, sendUserCreated, sendUserUpdated, sendUserDeleted } = require("../controllers/users");
const { findAllUsers, createUser, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists } = require("../middlewares/users");


const usersRouter = require("express").Router();
usersRouter.get("/users", findAllUsers, sendAllUsers)

usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    createUser,
    sendUserCreated
  );
  usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    updateUser,
    sendUserUpdated
  ); 
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted)

module.exports = usersRouter;