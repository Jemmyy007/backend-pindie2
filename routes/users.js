const { sendAllUsers, sendUserCreated, sendUserUpdated, sendUserDeleted } = require("../controllers/users");
const { findAllUsers, createUser, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists, filterPassword, hashPassword } = require("../middlewares/users");


const usersRouter = require("express").Router();
usersRouter.get("/users", findAllUsers, filterPassword, sendAllUsers);
// usersRouter.get("/users/:id", findUserById, filterPassword, sendUserById);

usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    hashPassword,
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