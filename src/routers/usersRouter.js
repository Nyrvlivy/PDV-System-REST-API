/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Operações relacionadas a usuários
 */

/**
 * @swagger
 * /usuario:
 *   get:
 *     summary: Obtém o perfil do usuário
 *     description: Retorna as informações do perfil do usuário autenticado
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               nome: "Nome do Usuário"
 *               email: "usuario@example.com"
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Usuário não encontrado
 *         content:
 *           application/json:
 *             example:
 *               error: "Cliente não encontrado."
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             example:
 *               mensagem: "Erro interno do servidor!"
 */

const { Router } = require("express");
const usersRouter = Router();
const { getUserProfileController } = require("../controllers");
const { tokenValidation } = require("../middlewares");

usersRouter.use(tokenValidation);
usersRouter.get("/", getUserProfileController.handle);

module.exports = usersRouter;
