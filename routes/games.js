const {sendAllGames, sendGameCreated, sendGameUpdated, sendGameDeleted} = require("../controllers/games");
const {findAllGames, createGame, updateGame, deleteGame} = require("../middlewares/games");


const gamesRouter = require("express").Router();
gamesRouter.get("/games", findAllGames, sendAllGames)
gamesRouter.post("/games", createGame, sendGameCreated)
gamesRouter.put("/games/:id", updateGame, sendGameUpdated)
gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted)

module.exports = gamesRouter;