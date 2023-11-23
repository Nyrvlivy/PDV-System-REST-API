const express = require("express");
const { statusRouter } = require("./routers");

const app = express();
app.use(express.json());

app.use("/", statusRouter);

module.exports = app;
