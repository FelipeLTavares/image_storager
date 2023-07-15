const BaseRepository = require("../BaseRepository");
const ImageModel = require("../../../database/models/images");

class ImageRepository extends BaseRepository {
  constructor(transcation) {
    super(ImageModel, transcation);
  }
}

module.exports = ImageRepository;
