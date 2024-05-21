const { sendAllUsers, sendUserCreated } = require("../controllers/users");
const { findAllUsers, createUser } = require("../middlewares/users");


const usersRouter = require("express").Router();
usersRouter.get("/users", findAllUsers, sendAllUsers)
usersRouter.post("/users", createUser, sendUserCreated)

module.exports = usersRouter;