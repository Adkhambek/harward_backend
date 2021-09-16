const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(process.cwd(), "src", "public/video"));
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname.split(" ").join("_"));
  },
});
const upload = multer({ storage: storage });

module.exports = upload;
