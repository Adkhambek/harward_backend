module.exports = (req, res, next) => {
    let urls = req.originalUrl.split("/");
    urls.shift()
    req.breadcrumb = urls.map((e, i) => {
        return e = {
            name: e.charAt(0).toUpperCase() + e.slice(1),
            url: "/" + urls.slice(0, i + 1).join("/"),
        }
    });
    next();
}