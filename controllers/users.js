const sendAllUsers = (req, res) =>{
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(req.usersArray))
}

const sendUserCreated = (req, res) =>{
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(req.user))
 }

 const sendUserUpdated = (req, res) =>{
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(req.user))
 }
 const sendUserDeleted = (req, res) =>{
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(req.user))
 }

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

 const sendMe = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
}; 

module.exports = {sendAllUsers, sendUserCreated, sendUserUpdated, sendUserDeleted, login, sendMe }