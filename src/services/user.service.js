const Todos = require('../models/todos.model');
const Users = require('../models/users.model');

class userServices {
    static async getAll() {
        try {
            const result = await Users.findAll();
            return result
        } catch (error) {
            throw(error)
        }
    }

    static async getById(id) {
    try {
        const result = await Users.findByPk(id);
        return(result)
    } catch (error) {
        throw error;
    }
    
    }

    static async getWithTasks(id){
        try {
            const result = await Users.findOne({
                where: {id},
                attributes: ["username"],
                include: {
                    model: Todos,
                    attributes: ["title"], // para que solo salga el título de la tarea
                    as: 'task' // se pone el alias
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create(user){
        try {
            const result = Users.create(user);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(id, field){
        try {
            const result = await Users.update(field, {
                where: {id}
            })
        } catch (error) {
            throw error;
        }
    }
}
module.exports = userServices;