const express = require("express");
const app = express();
const cors = require("cors");
const {
    statusRouter,
    categoriesRouter,
    loginRouter,
    usersRouter,
    productsRouter
} = require("./routers");
const { swaggerSpec, swaggerUi } = require("../docs/swagger");

app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/", statusRouter);
app.use("/categoria", categoriesRouter);
app.use("/login", loginRouter);
app.use("/usuario", usersRouter);
app.use("/produto", productsRouter);

module.exports = app;
