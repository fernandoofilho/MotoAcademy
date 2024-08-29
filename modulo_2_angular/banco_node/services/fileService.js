const mysql2 = require("mysql2/promise");
const config = require("../config/config");

async function getAllFiles() {
  const conn = await mysql2.createConnection(config);
  const [results] = await conn.query("SELECT * FROM `images`");
  return results;
}

const fs = require("fs").promises;
const path = require("path");
const mysql = require("mysql2/promise");
const imageDirectory = path.join(__dirname, "../uploads");

async function uploadFile(file) {
  const filePath = path.join(imageDirectory, file.originalname);
  await fs.writeFile(filePath, file.buffer);

  const connection = await mysql.createConnection(config);
  const sql = "INSERT INTO `images`(`filename`, `path`) VALUES (?, ?)";
  const values = [file.originalname, filePath];
  await connection.execute(sql, values);
  return { filename: file.originalname, path: filePath };
}



async function update(id, fileName) {
  const conn = await mysql2.createConnection(config);
  const sqlUpdate = "UPDATE images SET `fileName` = ? WHERE `id` = ?";
  const values = [fileName, id];
  const [results] = await conn.execute(sqlUpdate, values);
}

async function deleteFileService(id) {
  const conn = await mysql2.createConnection(config);
  const sqlDelete = "DELETE FROM images WHERE `id` = ?";
  const [results] = await conn.execute(sqlDelete, [id]);
}
module.exports = { getAllFiles, uploadFile, update, deleteFileService };
