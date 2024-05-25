const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const connectToDatabase = require("./database/connect")
const { cors } = require("./middlewares/cors")
const apiRouter = require("./routes/apiRouter");
const cookieParser = require("cookie-parser");
const pagesRouter = require("./routes/pages");

const app = express();
connectToDatabase()

const port = 3001;

app.use(
    cors,
    cookieParser(),
    bodyParser.json(),
    pagesRouter, 
    apiRouter,
    express.static(path.join(__dirname, "public"))
  );


app.listen(port, () => {
    console.log("Server has started on http://localhost:"+port)
})