const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.model');
const Categories = require('../models/categories.model');
const TodosCategories = require("../models/todos-categories.models")


const users = [
    {username: 'Katia', email: 'katia@gmail.com', password: '1234'}, // id:1
    {username: 'Lucero', email: 'lucero@gmail.com', password: '1234'}, // id:2
    {username: 'Diego', email: 'diego@gmail.com', password: '1234'}, // id:3
];

const todos = [
    {title: 'Estudiar Node', descripcion: 'Descripcion para 1', userId: 1}, // 1
    {title: 'Pasear al perro', descripcion: 'Descripcion para 2', userId: 1}, // 2
    {title: 'Dormir', descripcion: 'Ir a dormir temprano', userId: 2}, // 3 
    {title: 'Dar de comer a los gatos', descripcion: 'Descripcion para 3', userId: 3} // 4
];

const categories = [
    {name: 'personal'}, // 1
    {name: 'educacion'}, // 2
    {name: 'salud'}, // 3
    {name: 'trabajo'}, // 4
    {name: 'hogar'}, // 5
    {name: 'cocina'}, // 6
    {name: 'deporte'}, // 7
    {name: 'ocio'}, // 8
    {name: 'financiero'}, // 9
    {name: 'entretenimiento'}, // 10
  ];

//   esta es la tabla pivote
const todosCategories = [
    {categoryId: 1, todoId: 1},
    {categoryId: 3, todoId: 1},
    {categoryId: 1, todoId: 2},
    {categoryId: 7, todoId: 2},
    {categoryId: 3, todoId: 3},
    {categoryId: 10, todoId: 4},
    {categoryId: 5, todoId: 4},
];

//METODOS:
// create
// findOne, findAll (select * from), findByPk (encontrar por Pk)
// update
// destroy

db.sync({force: true})
    .then(() => {
        console.log('Iniciando con el sembradio');
        users.forEach((user) => Users.create(user)); // es como INSERT INTO users
        setTimeout(() => {
            todos.forEach((todo) => Todos.create(todo));
        }, 100);
        setTimeout(() => {
            categories.forEach((category) => Categories.create(category))
        }, 250);
        setTimeout(() => {
            todosCategories.forEach((tc) => TodosCategories.create(tc))
        }, 400);
    })
    .catch((error) => console.log(error));