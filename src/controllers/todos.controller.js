const todosServices = require('../services/todos.service');

const getAllTodos = async (req, res) => {
    try {
        const result = await todosServices.getAll(); 
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

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

module.exports = {
    getAllTodos
}