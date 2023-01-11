const todosServices = require('../services/todos.service');

const getAllTodos = async (req, res) => {
    try {
        const result = await todosServices.getAll(); 
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    getAllTodos
}