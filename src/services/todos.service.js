const Todos = require('../models/todos.model');

class todosServices {
    static async getAll() {
        try {
            const result = await Todos.findAll();
            return result
        } catch (error) {
            throw(error)
        }
    }
}

module.exports = todosServices;