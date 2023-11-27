const express = require("express");
const app = express();
const cors = require("cors");
const { statusRouter, categoriesRouter, loginRouter } = require("./routers");

app.use(express.json());
app.use(cors());

app.use("/", statusRouter);
app.use("/categoria", categoriesRouter);
app.use("/login", loginRouter);

module.exports = app;
