const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const connectToDatabase = require("./database/connect")
const cors = require("./middlewares/cors");
const apiRouter = require("./routes/apiRouter");


const app = express();
connectToDatabase()

const port = 3000;

app.use(
    // cors, 
    bodyParser.json(), 
    express.static(path.join(__dirname, "public")), 
    apiRouter
)


app.listen(3000, () => {
    console.log("Server has started on http://localhost:"+port)
})