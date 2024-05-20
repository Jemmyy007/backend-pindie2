const express = require("express");
// const usersRouter = require("./routes/users");
const usersRouter = require("./routes/users")
const gamesRouter = require("./routes/games");
const categoriesRouter = require("./routes/categories");
const bodyParser = require("body-parser");
const path = require("path");
const connectToDatabase = require("./database/connect")


const app = express();
connectToDatabase()

const port = 3000;

app.use(bodyParser.json(), 
usersRouter,
express.static(path.join(__dirname, "public")), 
gamesRouter,

categoriesRouter
)


app.listen(3000, () => {
    console.log("Server has started on http://localhost"+port)
})