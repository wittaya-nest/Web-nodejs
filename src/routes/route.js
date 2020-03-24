const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.html", { title: "First Website" });
});

router.get("/contact", (req, res) => {
  res.render("contact.html", { title: "Contact Page" });
});
router.get("/login", (req, res) => {
  res.render("login.html", { title: "Login Page" });
});

module.exports = router;
