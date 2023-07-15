const ImageService = require("../../services/image");
const MultipartFormDataHandler = require("../../utils/multipartFormDataHandler");

class ImageController {
  static async create(req, res) {
    try {
      const { files } = await MultipartFormDataHandler.formParse(req);
      const response = await ImageService.create(files.images);
      if (!response.result) throw new Error();

      res.status(200).json(response);
    } catch (error) {
      res.json(404).json(error);
    }
  }

  static getImage(req, res) {
    try {
      const { fileName } = req.params;
      const response = ImageService.getImage(fileName);

      if (!response.result) throw new Error();
      res.status(200).sendFile(response.result);
    } catch (error) {
      res.status(400).json({});
    }
  }
}

module.exports = ImageController;
