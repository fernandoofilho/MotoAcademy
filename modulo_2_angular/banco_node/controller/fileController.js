const fileService = require("../services/fileService");

async function getFiles(req, res) {
  try {
    const users = await fileService.getAllFiles();
    return res.status(200).json(users);
  } catch (error) {
    res.status(400).send({ message: "Erro ao pesquisar usuários" });
  }
}
async function createFile(req, res) {
  try {
    const users = await fileService.uploadFile(req.file);
    return res.status(200).json(req.body);
  } catch (error) {
    return res.status(400).send({ message: "Erro ao criar novo usuário" });
  }
}

async function updateFile(req, res) {
  try {
    const { id } = req.params;
    const { nome } = req.body;
    const user = await fileService.update(id, nome);
    res.status(200).send({ message: req.body });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Erro ao atualizar usuário" });
  }
}
async function deleteFile(req, res) {
  try {
    const { id } = req.params;
    await fileService.deleteFileService(id);
    res.status(200).send({ message: "user deleted" });
  } catch (error) {
    res.status(400).send({ message: "User not deleted", error: error });
  }
}

module.exports = { getFiles, createFile, updateFile, deleteFile };
