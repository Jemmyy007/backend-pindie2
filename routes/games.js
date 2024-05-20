const sendAllGames = require("../controllers/games");
const findAllGames = require("../middlewares/games");

const gamesRouter = require("express").Router();
gamesRouter.get("/games", findAllGames, sendAllGames)
module.exports = gamesRouter;