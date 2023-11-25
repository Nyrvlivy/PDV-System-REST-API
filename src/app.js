const express = require("express");
const app = express();
const cors = require("cors");
const { statusRouter, categoriesRouter } = require("./routers");

app.use(express.json());
app.use(cors());

app.use("/", statusRouter);
app.use("/categoria", categoriesRouter);

module.exports = app;
