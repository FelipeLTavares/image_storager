const multiparty = require("multiparty");

class MultipartFormDataHandler {
  static formParse = (req) =>
    new Promise((resolve, reject) => {
      const form = new multiparty.Form();

      form.parse(req, function (err, fields, files) {
        if (err) return reject(err);
        // const fields = Object.entries(rawFields)
        //   .map(([key, value]) => [key, value[0]])
        //   .reduce((old, [key, value]) => ({ ...old, [key]: value }), {});

        return resolve({ fields: fields, files: files });
      });
    });
}

module.exports = MultipartFormDataHandler;
