const { verify } = require("../lib/jwt");
const { fetch } = require("../lib/database")

module.exports = async (req, res, next) => {
    const token = req.cookies.token;
    const { username } = await fetch("select username from admin");
    const payload = verify(token);
    if(token && (username == payload.username)) {
       return next();
    } else {
        req.flash("error", "You are not logged in. Please, login")
        res.redirect("/admin/login");
    }
}

