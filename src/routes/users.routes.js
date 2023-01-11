const {Router} = require('express');
const {getAllUsers, getUserById, createUser, updateUser, deleteUser, getUserWithTask} = require('../controllers/users.controller');

const router = Router();

// localhost:8000/users
// controlador
router.get('/users', getAllUsers); // funciona igual que un app.get, peor a través de un enrutador

router.get('/users/:id', getUserById);

// obtener a un usuario con sus tareas
router.get('/users/:id/todo', getUserWithTask);

router.post("/users", createUser);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

module.exports = router;