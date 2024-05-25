const user = require("../models/user")
const bcrypt = require("bcryptjs"); 


const hashPassword = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;
    next();
  } catch (error) {
    res.status(400).send({ message: "Ошибка хеширования пароля" });
  }
};


const findAllUsers = async(req, res, next) =>{
    req.usersArray = await user.find({})
    next();
}

const checkEmptyNameAndEmailAndPassword = async (req, res, next) => {
    if (!req.body.username || !req.body.email || !req.body.password) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Введите имя, email и пароль" }));
    } else {
      next();
    }
  };

const createUser = async(req, res, next) =>{
    try {
        console.log(req.body);
        req.user = await user.create(req.body);
        next();
    } catch(err) {
        res.status(400).send("Error creating user")
    }
}

const updateUser = async(req, res, next) =>{
    try{
       req.user = await user.findByIdAndUpdate(req.params.id, req.body)
       next();
    } catch(err){
        res.send(400).send({message: "Ошибка в обновлении"})
    }
}
const deleteUser = async(req, res, next) =>{
    try{
       req.user = await user.findByIdAndDelete(req.params.id)
       next();
    } catch(err){
        res.send(400).send({message: "Ошибка в удалении"})
    }
}

const checkEmptyNameAndEmail = async (req, res, next) => {
    if (!req.body.username || !req.body.email) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Введите имя и email" }));
    } else {
      next();
    }
  };

  const checkIsUserExists = async (req, res, next) => {
    const isInArray = req.usersArray.find((user) => {
      return req.body.email === user.email;
    });
    if (isInArray) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Пользователь с таким email уже существует" }));
    } else {
      next();
    }
  }; 

  const filterPassword = (req, res, next) => {
    const filterUser = (user) => {
      const { password, ...userWithoutPassword } = user.toObject();
      return userWithoutPassword;
    };
    if (req.user) {
      req.user = filterUser(req.user);
    }
    if (req.usersArray) {
      req.usersArray = req.usersArray.map((user) => filterUser(user));
    }
    next();
  };

module.exports = {hashPassword, filterPassword, findAllUsers, createUser, updateUser,deleteUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail,checkIsUserExists};