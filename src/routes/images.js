const express = require("express");

const ImageController = require("../controllers/Images/index");

const Router = express.Router();

Router.get("/:fileName", ImageController.getImage);
Router.post("/", ImageController.create);

module.exports = Router;
