const fileService = require("../services/fileService");

async function getFiles(req, res) {
  try {
    const users = await fileService.getAllFiles();
    return res.status(200).json(users);
  } catch (error) {
    res.status(400).send({ message: "Erro ao pesquisar arquivo" });
  }
}

async function GetFile(req, res){ 
  try {
    const {id} = req.params;
    image = await fileService.getImage(id)
    const img = res.status(200).send(image.content)
  } catch (error) {
        res.status(400).send({ message: error});

  }
}

async function createFile(req, res) {
  try {
    const users = await fileService.uploadFile(req.file);
    return res.status(200).json(req.body);
  } catch (error) {
    return res.status(400).send({ message: "Erro ao criar novo arquivo" });
  }
}

async function updateFile(req, res) {
  try {
    const { id } = req.params;
    const file = await fileService.update(id, req.file);
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
    res.status(200).send({ message: "archive deleted" });
  } catch (error) {
    res.status(400).send({ message: "archive not deleted", error: error });
  }
}

module.exports = { getFiles, createFile, updateFile, deleteFile, GetFile };
