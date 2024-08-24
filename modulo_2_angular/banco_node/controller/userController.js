const usersService = require('../services/userService')

async function getUsers(req, res){
    try {
        const users = await usersService.getAllUsers()
        return res.status(200).json(users)
    } catch (error) {
        
    }

};
async function createUser(req, res){
    try {

        const {nome, idade, email, senha } = req.body;
        
        
        const users = await usersService.createUser(nome,idade,email,senha)
        return res.status(200).json(req.body);

    } catch (error) {
                res.status(400).send({ message: "Erro ao criar novo usuário" });

    }

};
function updateUser(req, res){
    try {
        res.status(200).send({message: "Hello World"})
    } catch (error) {
        
    }

};
function deleteUser(req, res){
    try {
        res.status(200).send({message: "Hello World"})
    } catch (error) {
        
    }

};

module.exports = {getUsers, createUser, updateUser, deleteUser}
