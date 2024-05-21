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

const updateGame = async(req, res, next) =>{
    try{
       req.game = await game.findByIdAndUpdate(req.params.id, req.body)
       next();
    } catch(err){
        res.send(400).send({message: "Ошибка в обновлении"})
    }
}


module.exports = {findAllGames, createGame, updateGame};