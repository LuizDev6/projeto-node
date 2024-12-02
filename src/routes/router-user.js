const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Definir rotas CRUD
router.post('/users', userController.createUser); // Cria um novo usuário
router.get('/users', userController.getAllUsers); // Retorna todos os usuários
router.get('/users/:id', userController.getUserById); // Retorna um usuário por ID
router.put('/users/:id', userController.updateUser); // Atualiza um usuário
router.delete('/users/:id', userController.deleteUser); // Deleta um usuário

module.exports = router;
