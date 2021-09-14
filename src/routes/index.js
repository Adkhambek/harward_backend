const router = require("express").Router();
const publicRoutes = require("./public");
const adminRoutes = require("./admin");

router.use("/admin", adminRoutes);
router.use("/", publicRoutes);

module.exports = router;
