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
 *               error: "Usuário não encontrado."
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             example:
 *               mensagem: "Erro interno do servidor!"
 */

const { Router } = require("express");
const usersRouter = Router();
const {
    getUserProfileController,
    updateUserController,
} = require("../controllers");
const { authToken } = require("../middlewares");

usersRouter.use(authToken);
usersRouter.get("/", authToken, getUserProfileController.handle);
usersRouter.put("/", authToken, updateUserController.handle);

module.exports = usersRouter;
