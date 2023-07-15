const path = require("path");
const fs = require("fs");

class ImageStorager {
  static saveImage(imagesList) {
    return new Promise((resolve, reject) => {
      try {
        const uploadDir = path.resolve(__dirname, "..", "uploads");

        if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
        const images = [];

        for (let file of imagesList) {
          const readStream = fs.createReadStream(file.path);
          const fileName = `${Date.now()}_${file.originalFilename}`;
          const filePath = path.join(uploadDir, fileName);
          const writeStream = fs.createWriteStream(filePath);
          readStream.pipe(writeStream);

          images.push({ name: fileName });
        }

        resolve(images);
      } catch (err) {
        reject(err);
      }
    });
  }

  static getImage(fileName) {
      const filePath = path.resolve(__dirname, "..", "uploads", fileName);
      fs.existsSync(filePath);
      return filePath;
  }
}

module.exports = ImageStorager;

// saveImage(file) {
//     try {
//       const result = sequelize.transaction(async (transaction) => {
//         const photoRepository = new PhotoRepository(transaction);

//         const photo = await photoRepository.create({
//           url: "a",
//           publicKey: "a",
//         });

//         //
//         const uploadDir = path.join(__dirname, "..", "..", "..", "uploads");

//         if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

//         const readStream = fs.createReadStream(file.path);
//         const fileName = `${Date.now()}_${file.originalFilename}`;
//         const filePath = path.join(uploadDir, fileName);
//         const writeStream = fs.createWriteStream(filePath);
//         readStream.pipe(writeStream);

//         writeStream.on("close", () => {
//           fs.unlinkSync(file.path);
//         });
//         //

//         await photoRepository.update(photo.id, {
//           url: `http://localhost:5000/img/${fileName}`,
//         });
//         return photo.id;
//       });

//       return result;
//     } catch (error) {
//       return error;
//     }
//   }

//   getImage(fileName, res) {
//     try {
//       const filePath = path.join(
//         __dirname,
//         "..",
//         "..",
//         "uploads",
//         fileName
//       );
//       fs.existsSync(filePath);
//       res.status(200).sendFile(filePath);
//     } catch (error) {
//       res.status(400);
//     }
//   }

//   deleteImage(fileName, res) {
//     try {
//       const filePath = path.join(
//         __dirname,
//         "..",
//         "..",
//         "..",
//         "uploads",
//         fileName
//       );
//       fs.unlink(filePath, (err) => {
//         if (err) return false;
//         return true;
//       });
//     } catch (error) {
//       return false;
//     }
//   }
