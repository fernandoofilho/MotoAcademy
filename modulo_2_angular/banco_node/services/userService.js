const mysql2 = require('mysql2/promise')
const config = require('../config/config')

async function getAllUsers() {
    const conn = await mysql2.createConnection(config);
    const [results] = await conn.query('SELECT * FROM `aluno`')
    return results
}   


module.exports = {getAllUsers};