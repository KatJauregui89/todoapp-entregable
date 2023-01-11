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

    static async update(id, field) {
        try {
            const result = await Todos.update(field, {where: {id}});
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = todosServices;