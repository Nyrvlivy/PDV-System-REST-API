const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Challenge Backend 05 - PDV API RESTful",
      version: "1.0.0",
      description: "Esse é um projeto piloto de uma API RESTful para um PDV (Frente de Caixa).",
    },
    servers: [
      {
        url: "https://challenge-backend-05.onrender.com/",
        description: "API de Teste",
      },
    ],
  },
  apis: [path.join(__dirname, "../src/routers/*.js")],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerSpec, swaggerUi };
