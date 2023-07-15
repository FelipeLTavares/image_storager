const ImageRepository = require("../repositories/image");
const database = require("../../database");
const ImageStorager = require("../utils/imageStorager");

class ImageService {
  static async create(imagesList) {
    try {
      const savedImages = await ImageStorager.saveImage(imagesList);
      await database.transaction(async (transaction) => {
        const imageRepository = new ImageRepository(transaction);

        const images = await imageRepository.bulkCreate(savedImages);

        return images;
      });

      return {
        result: true,
        message: "Sucesso!",
      };
    } catch (error) {
      return {
        result: false,
        message: "Erro!",
      };
    }
  }

  static getImage(fileName) {
    try {
      return {
        result: ImageStorager.getImage(fileName),
        message: 'Sucesso!' 
      } 
    } catch (error) {
      return {
        result: false,
        message: 'Erro!' 
      } 
    }
  }
}

module.exports = ImageService;
