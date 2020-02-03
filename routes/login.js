const express = require("express"),
  router = express.Router(),
  path = require("path");
rootDir = require("../util/path");

router.get("/login", (req, res, next) => {
  return res.sendFile(path.join(rootDir, "views", "login.html"));
});

module.exports = router;
