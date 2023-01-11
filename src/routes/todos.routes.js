const {Router} = require('express');
const { getAllTodos } = require('../controllers/todos.controller');

const router = Router();

router.get('/todos', getAllTodos); // funciona igual que un app.get, pero a través de un enrutador

// router.get('/todos/:id', getTodoById);

// router.post("/todos", createTodo);

// router.put("/todos/:id", updateTodo);

// router.delete("/todos/:id", deleteTodo);

module.exports = router;