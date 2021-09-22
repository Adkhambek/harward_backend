const router = require("express").Router();
const model = require("../../model/admin");
const { maxAge } = require("../../config/keys");
const { sign } = require("../../lib/jwt");

router.get("/login", (req, res) => {
  res.render("admin/login", {
    successMessage: req.flash("success"),
    errorMessage: req.flash("error")
  });
});

router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    if(!username || !password) {
        req.flash("error", "username or password is empty. Please, fill in all the required fields.");
        res.redirect("/admin/login");
    } else {
        const auth = await model.checkLogin(username, password);
        if(auth) {
            res.cookie("token", sign(auth), { maxAge });
            res.redirect("/admin");
        } else {
            req.flash("error", "username or password is incorrect. Please, try one more time.");
            res.redirect("/admin/login");  
        }
    }
});

router.get("/logout", (req, res) => {
    res.clearCookie('token').redirect("/admin/login")
})

module.exports = router;