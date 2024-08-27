const usersService = require('../services/userService')

async function getUsers(req, res){
    try {
        const users = await usersService.getAllUsers()
        return res.status(200).json(users)
    } catch (error) {
        res.status(400).send({ message: "Erro ao pesquisar usuários" });

    }

};
async function createUser(req, res){
    try {

        const {nome, idade, email, senha } = req.body;
        const users = await usersService.createUser(nome,idade,email,senha)
        return res.status(200).json(req.body);

    } catch (error) {
        return res.status(400).send({ message: "Erro ao criar novo usuário" });

    }

};

async function updateUser(req, res){
    try {
        const { id } = req.params;
        const { nome } = req.body;
        const user = await usersService.update(id, nome);
        res.status(200).send({message: req.body})
        
    } catch (error) {
        console.log(error)
        res.status(400).send({message: "Erro ao atualizar usuário"})
    }

};
async function deleteUser(req, res){
    try {
        const { id } = req.params;
        await usersService.deleteUserService(id);
        res.status(200).send({message: "user deleted"})
    } catch (error) {
        res.status(400).send({message:"User not deleted", error: error})
        
    }

};

module.exports = {getUsers, createUser, updateUser, deleteUser}
