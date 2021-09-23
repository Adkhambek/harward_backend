const jwt = require("../lib/jwt");
const { fetch } = require("../lib/database");

module.exports = async (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        req.flash("error", "you are not logged in. Please login in to access. ")
        res.redirect("/admin/login"); 
    } else {
        try {
            const payload = jwt.verify(token);  
            const { username } = await fetch("select username from admin");
            if(username === payload.username) {
                return next()
            } else {
                req.flash("error", "The user belonging to this token does no longer exist.")
                res.redirect("/admin/login");    
            }
        } catch (error) {
          if(error.name === "JsonWebTokenError"){
            req.flash("error", "Invalid token. Please, log in again!")
            res.redirect("/admin/login");  
          } else if(error.name === "JsonExpiredError") {
            req.flash("error", "Your token has expired. Please, log in again!")
            res.redirect("/admin/login");    
          }
        }
    }

}

