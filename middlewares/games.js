const game = require("../models/game")

// const findAllGames = async(req, res, next) =>{
//     req.gamesArray = await game.find({}).populate("categories")
//     .populate({
//         path: "users",
//         select: "-password"
//     })
//     next();
// }

const findAllGames = async (req, res, next) => {
  // Поиск всех игр в проекте по заданной категории
  if(req.query["categories.name"]) { 
    req.gamesArray = await game.findGameByCategory(req.query["categories.name"]);
    next();
    return;
  }

  req.gamesArray = await game
    .find({})
    .populate("categories")
    .populate({
      path: "users",
      select: "-password" 
    })
  next();
};


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

const deleteGame = async(req, res, next) =>{
    try{
       req.game = await game.findByIdAndDelete(req.params.id)
       next();
    } catch(err){
        res.send(400).send({message: "Ошибка в Удалении"})
    }
}

const checkEmptyFields = async (req, res, next) => {
  if(req.isVoteRequest) {
    next();
    return;
  } 
    if (
      !req.body.title ||
      !req.body.description ||
      !req.body.image ||
      !req.body.link ||
      !req.body.developer
    ) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Заполни все поля" }));
    } else {
      next();
    }
  };


const checkIfCategoriesAvaliable = async (req, res, next) => {
  if(req.isVoteRequest) {
    next();
    return;
  } 
  if (!req.body.categories || req.body.categories.length === 0) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Выбери хотя бы одну категорию. Ошибка тут" }));
  } else {
    next();
  }
};



const checkIfUsersAreSafe = async (req, res, next) => {
  if (!req.body.users) {
    next();
    return;
  }
  if (req.body.users.length - 1 === req.game.users.length) {
    next();
    return;
  } else {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Нельзя удалять пользователей или добавлять больше одного пользователя" }));
  }
};

const checkIsGameExists = async (req, res, next) => {
  const isInArray = req.gamesArray.find((game) => {
    return req.body.title === game.title;
  });
  if (isInArray) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Игра с таким названием уже существует" }));
  } else {
    next();
  }
};

const checkIsVoteRequest = async (req, res, next) => {
  if (Object.keys(req.body).length === 1 && req.body.users) {
    req.isVoteRequest = true;
  }
  next();
}; 

const findGameById = async (req, res, next) => {
  try {
      req.game = await game.findById(req.params.id);
  next();
  } catch (error) {
      res.status(404).send({ message: "Game not found" });
  }
}; 

module.exports = {findAllGames, createGame, updateGame, deleteGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists, checkIsVoteRequest, findGameById};