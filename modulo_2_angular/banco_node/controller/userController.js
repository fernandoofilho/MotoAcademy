const usersService = require('../services/userService')

async function getUsers(req, res){
    try {
        const users = await usersService.getAllUsers()
        return res.status(200).json(users)
    } catch (error) {
        
    }

};
function createUser(req, res){
    try {
        res.status(200).send({message: "Hello World"})
    } catch (error) {
        
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
