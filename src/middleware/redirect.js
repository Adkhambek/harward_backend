module.exports = (req, res, next) => {
    const token = req.cookies.token;
    if(token) {
       return next();
    } else {
        req.flash("error", "You are not logged in. Please, login")
        res.redirect("/admin/login");
    }
}

