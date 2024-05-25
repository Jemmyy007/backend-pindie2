const users = require("../models/user.js");
const bcrypt = require('bcryptjs')

// const login = (req, res) => {
//     const { email, password } = req.body;
  
//     users
//       .findOne({ email }).then(user => {
//           if (!user) {
//             return Promise.reject(new Error("Неправильные почта или пароль"));
//           }
      
//           return bcrypt.compare(password, user.password).then(matched => {
//             if (!matched) {
//               return Promise.reject(new Error("Неправильные почта или пароль"));
//             }
//             return user; 
//           });
//         })
//       .then((user) => {
//         res
//           .status(200)
//           .send({ _id: user._id, username: user.username, email: user.email });
//       })
//       .catch(error => {
//         res.status(401).send({ message: error.message });
//       });
//   };


const login = (req, res) => {
    const { email, password } = req.body;
  
    users
      .findUserByCredentials(email, password)
      .then((user) => {
        res
          .status(200)
          .send({ _id: user._id, username: user.username, email: user.email });
      })
      .catch(error => {
        res.status(401).send({ message: error.message });
      });
  };

  module.exports = {login}