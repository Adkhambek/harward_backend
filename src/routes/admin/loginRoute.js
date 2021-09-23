const router = require("express").Router();
const model = require("../../model/admin");
const { maxAge } = require("../../config/keys");
const { sign } = require("../../lib/jwt");
const redirect = require("../../middleware/redirect");

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

router.get("/password", redirect, async (req, res) => {
    const course = await model.getCourses();
	const contact = await model.getContacts();
    res.render("admin/passwordForm", { 
        page: "dashboard", 
        successMessage: req.flash("success"),
        errorMessage: req.flash("error"),
        course,
        contact
    });
});

router.post("/password", async (req, res) => {
    const { oldPassword, newPassword, confirmPassword } = req.body;
    if(!oldPassword || !newPassword || !confirmPassword) {
        req.flash("error", "password is empty. Please, fill in all the required fields.");
        res.redirect("/admin/password");
    } else {
        const password = await model.oldPassword(oldPassword);
        if(password) {
            if(newPassword == confirmPassword) {
                await model.changePassword(newPassword);
                req.flash("success", "password correctly changed")
                res.redirect("/admin/login");
            } else {
                req.flash("error", "please write correct password.");
                res.redirect("/admin/password");
            }
        } else {
            req.flash("error", "old password is incorrect. Please, try one more time.");
            res.redirect("/admin/password"); 
        }
    }
});

module.exports = router;