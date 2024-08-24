const mysql2 = require('mysql2/promise')
const config = require('../config/config')

async function getAllUsers() {
    const conn = await mysql2.createConnection(config);
    const [results] = await conn.query('SELECT * FROM `aluno`')
    return results
}   

async function createUser(nome, idade, email, senha) {
    const conn = await mysql2.createConnection(config);
    const sqlCreate = 'INSERT INTO `aluno` (`nome`, `idade`, `email`,  `senha`) VALUES(?, ?, ?, ?)'
    const values = [nome, idade, email, senha]
    const [results] = await conn.execute(sqlCreate, values);
    return results;
}
module.exports = { getAllUsers, createUser };