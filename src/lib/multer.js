const multer = require("multer");
const path = require("path");

const fileUpload = (folderName) => {
  const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, path.join(process.cwd(), "src", "public", folderName));
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname.split(" ").join("_"));
    },
  });
  return multer({ storage: storage });
};

module.exports = fileUpload;
