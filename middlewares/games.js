const game = require("../models/game")

const findAllGames = async(req, res, next) =>{
    req.gamesArray = await game.find({})
    next();
}

module.exports = findAllGames;