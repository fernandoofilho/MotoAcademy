const express = require("express");
const multer = require("multer")

const fileController = require("../controller/fileController");
const router = express.Router();
const upload = multer();

router.get("/files/:id", fileController.getFiles);
router.post("/files/upload", upload.single("image"), fileController.createFile);
router.put("/files/:id", fileController.updateFile);
router.delete("/files/:id", fileController.deleteFile);

module.exports = router;
