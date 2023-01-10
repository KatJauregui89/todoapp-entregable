const userServices = require('../services/user.service')

const getAllUsers = async (req, res) => {
    try {
        const result = await userServices.getAll(); 
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const getUserById = async (req, res) => {
try {
    const {id} = req.params;
    const result = await userServices.getById(id);
    res.status(200).json(result)
} catch (error) {
    res.status(400).json(error.message)
}
};

const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await userServices.create(newUser);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const field = req.body;
        const result = await userServices.update(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const deleteUser = (req, res) => {
    try {
        res.json({message: 'eliminando usuarios'})
    } catch (error) {
        
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}