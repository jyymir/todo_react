
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController.js');

router.post('/todos', todoController.createTodo);
router.delete('/todos/:id', todoController.deleteTodo);
router.get('/todos', todoController.getAllTodos);
router.put('/todos/:id', todoController.updateTodo);
router.get('/todos/:id', todoController.getATodo);

module.exports = router;
