const router = require("express").Router();
const model = require("../../model/contact");
const infoModel = require("../../model/info");

router.get("/aloqa", async (req, res) => {
	const info = await infoModel.getInfo();
  	res.render("public/aloqa", { 
		info,  
		successMessage: req.flash("success"),
		errorMessage: req.flash("error"),
		section: "contact",
	});
});

router.post("/aloqa", async (req, res) => {
	const name = req.body.name;
	const tel = req.body.phones;
	const text = req.body.text;
	if(!name || !tel || !text) {
		req.flash("error", "bo'sh qator bor. Iltimos formani to'liq to'ldiring!");
		res.redirect("/aloqa");
	} else {
		await model.inserData(req.body);
		req.flash("success", "Form muvaffaqiyatli qabul qilindi");
		res.redirect("/aloqa");
	}
})

module.exports = router;