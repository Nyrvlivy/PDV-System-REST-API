const express = require("express");
const app = express();
const cors = require("cors");
const { statusRouter } = require("./routers");

app.use(express.json());
app.use(cors());

app.use("/", statusRouter);

module.exports = app;
