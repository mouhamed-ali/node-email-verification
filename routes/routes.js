const express = require("express"),
  router = express.Router(),
  path = require("path");
rootDir = require("../util/path");

// in this route we will serve the index.html file
router.get("/", (req, res, next) => {
  return res.sendFile(path.join(rootDir, "views", "index.html"));
});

module.exports = router;
