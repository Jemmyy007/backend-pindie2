const usersRouter = require("./users")
const gamesRouter = require("./games");
const categoriesRouter = require("./categories");
const authRouter = require("./auth");

const apiRouter = require("express").Router();

apiRouter.use("/api", gamesRouter);
apiRouter.use("/api", usersRouter);
apiRouter.use("/api", categoriesRouter);
apiRouter.use("/api", authRouter);

// Код роута
module.exports = apiRouter;