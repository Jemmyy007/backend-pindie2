const {sendAllGames, sendGameCreated, sendGameUpdated, sendGameDeleted} = require("../controllers/games");
const {findAllGames, createGame, updateGame, deleteGame, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, checkIsGameExists, checkIsVoteRequest} = require("../middlewares/games");
const { checkAuth } = require("../middlewares/auth.js");

const gamesRouter = require("express").Router();
gamesRouter.get("/games", findAllGames, sendAllGames)
gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    createGame,
    sendGameCreated
  );
  
  gamesRouter.put(
    "/games/:id",
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    updateGame,
    checkIsVoteRequest,
    sendGameUpdated
  ); 


gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted)

module.exports = gamesRouter;