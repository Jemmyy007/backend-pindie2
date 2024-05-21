const {sendAllGames, sendGameCreated, sendGameUpdated, sendGameDeleted} = require("../controllers/games");
const {findAllGames, createGame, updateGame, deleteGame, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, checkIsGameExists} = require("../middlewares/games");


const gamesRouter = require("express").Router();
gamesRouter.get("/games", findAllGames, sendAllGames)
gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    createGame,
    sendGameCreated
  );
  
  gamesRouter.put(
    "/games/:id",
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    updateGame,
    sendGameUpdated
  ); 


gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted)

module.exports = gamesRouter;