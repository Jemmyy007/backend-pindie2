const express = require("express");
// const usersRouter = require("./routes/users");
const usersRouter = require("./routes/users")
const gamesRouter = require("./routes/games");
const categoriesRouter = require("./routes/categories");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const port = 3000;

app.use(bodyParser.json(), 
express.static(path.join(__dirname, "public")), 
// usersRouter, 
// gamesRouter, 
// categoriesRouter
)


app.listen(3000, () => {
    console.log("Serrcer has started on http://localhost"+port)
})