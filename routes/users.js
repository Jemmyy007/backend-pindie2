const sendAllGames = require("../controllers/games");
const findAllGames = require("../middlewares/games");

const usersRouter = require("express").Router();
usersRouter.get("/users", findAllGames, sendAllGames)
module.exports = usersRouter;