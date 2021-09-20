const router = require("express").Router();
const publicRoutes = require("./public");
const adminRoutes = require("./admin");

router.use("/admin", adminRoutes);
router.use("/", publicRoutes);
router.use((req, res) => {
    res.render("404.ejs")
});

module.exports = router;
