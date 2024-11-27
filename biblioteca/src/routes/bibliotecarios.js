const express = require('express');
const router = express.Router();
const bibliotecariosController = require('../controllers/bibliotecariosController');

// Ruta para iniciar sesión
router.post('/login', bibliotecariosController.login);

// Ruta para crear un bibliotecario
router.post('/', bibliotecariosController.create);

module.exports = router;