const game = require("../models/game")

const findAllGames = async(req, res, next) =>{
    req.gamesArray = await game.find({}).populate("categories").populate("users")
    next();
}

const createGame = async(req, res, next) =>{
    try {
        console.log(req.body);
        req.game = await game.create(req.body);
        next();
    } catch(err) {
        res.status(400).send("Error creating game")
    }
}

module.exports = {findAllGames, createGame};