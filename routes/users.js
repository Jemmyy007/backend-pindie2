const { sendAllUsers, sendUserCreated, sendUserUpdated, sendUserDeleted } = require("../controllers/users");
const { findAllUsers, createUser, updateUser, deleteUser } = require("../middlewares/users");


const usersRouter = require("express").Router();
usersRouter.get("/users", findAllUsers, sendAllUsers)
usersRouter.post("/users", createUser, sendUserCreated)
usersRouter.put("/users/:id", updateUser, sendUserUpdated)
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted)

module.exports = usersRouter;