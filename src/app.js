const express = require("express");
const app = express();
const cors = require("cors");
const { statusRouter, categoriesRouter, loginRouter, usersRouter } = require("./routers");

app.use(express.json());
app.use(cors());

app.use("/", statusRouter);
app.use("/categoria", categoriesRouter);
app.use("/login", loginRouter);
app.use("/usuario", usersRouter);

module.exports = app;
