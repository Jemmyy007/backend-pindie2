const express = require("express");
// const usersRouter = require("./routes/users");
const usersRouter = require("./routes/users")
const gamesRouter = require("./routes/games");
const categoriesRouter = require("./routes/categories");
const bodyParser = require("body-parser");
const path = require("path");
const connectToDatabase = require("./database/connect")
const cors = require("./middlewares/cors")


const app = express();
connectToDatabase()

const port = 3000;

app.use(
    // cors, 
    bodyParser.json(), 
    express.static(path.join(__dirname, "public")), 
    gamesRouter,
    usersRouter,
    categoriesRouter
)


app.listen(3000, () => {
    console.log("Server has started on http://localhost"+port)
})