const express = require("express"),
  router = express.Router(),
  path = require("path");
rootDir = require("../util/path");

// in this route we will serve the common routes
router.get("/", (req, res, next) => {
  //return res.sendFile(path.join(rootDir, "views", "index.html"));
  res.render("index", { docTitle: "Index page", path: "/" });
  //we have added the path to set the active class in the main-layout.pug. check the code to understand
});

module.exports = router;
