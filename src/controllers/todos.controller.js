const todosServices = require('../services/todos.service');

const getAllTodos = async (req, res) => {
    try {
        const result = await todosServices.getAll(); 
        // res.status(200).json(result);
        res.json(result) // es lo mismo que el de arriba en este caso
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const getTodoById = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await todosServices.getById(id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const createTodo = async (req, res) => {
    try {
        const todo = req.body;
        const result = await todosServices.create(todo);
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const updateTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const field = req.body;
        const result = await todosServices.update(id, field);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await todosServices.delete(id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllTodos,
    updateTodo,
    getTodoById,
    createTodo,
    deleteTodo
}