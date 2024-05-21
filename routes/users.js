const { sendAllUsers, sendUserCreated, sendUserUpdated } = require("../controllers/users");
const { findAllUsers, createUser, updateUser } = require("../middlewares/users");


const usersRouter = require("express").Router();
usersRouter.get("/users", findAllUsers, sendAllUsers)
usersRouter.post("/users", createUser, sendUserCreated)
usersRouter.put("/users/:id", updateUser, sendUserUpdated)

module.exports = usersRouter;