const { login } = require("../controllers/auth");
const authRouter = require("express").Router();

authRouter.post("/auth/login", login);

module.exports = authRouter;
