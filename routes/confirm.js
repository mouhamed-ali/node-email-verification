const express = require("express"),
  router = express.Router(),
  usersDB = require("../util/users"),
  jwt = require("jsonwebtoken"),
  tokensDB = require("../util/tokens");

router.get("/confirmation", (req, res, next) => {
  let token = req.query.token;
  console.log("token : ", token);
  res.render("login", { docTitle: "Login page" });
});

module.exports = router;
