const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const autenticacaoMiddleware = require('../middlewares/autenticacaoMiddleware');

router.put('/usuarios', autenticacaoMiddleware, usuarioController.editarUsuario);

module.exports = router;