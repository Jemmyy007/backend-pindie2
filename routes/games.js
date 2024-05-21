const {sendAllGames, sendGameCreated, sendGameUpdated} = require("../controllers/games");
const {findAllGames, createGame, updateGame} = require("../middlewares/games");


const gamesRouter = require("express").Router();
gamesRouter.get("/games", findAllGames, sendAllGames)
gamesRouter.post("/games", createGame, sendGameCreated)
gamesRouter.put("/games/:id", updateGame, sendGameUpdated)
module.exports = gamesRouter;