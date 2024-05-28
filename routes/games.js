const {sendAllGames, sendGameCreated, sendGameUpdated, sendGameDeleted, sendGameById} = require("../controllers/games");
const {findAllGames, createGame, updateGame, deleteGame, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, checkIsGameExists, checkIsVoteRequest, findGameById} = require("../middlewares/games");
const { checkAuth } = require("../middlewares/auth.js");

const gamesRouter = require("express").Router();
gamesRouter.get("/games", findAllGames, sendAllGames)
gamesRouter.get("/games/:id", findGameById, sendGameById);
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
    findGameById,
    checkIsVoteRequest,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    updateGame,
    sendGameUpdated
  ); 


gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted)

module.exports = gamesRouter;