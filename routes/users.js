const express = require("express"),
  router = express.Router(),
  usersDB = require("../util/users");

// show all users of the application
router.get("/users", (req, res, next) => {
  console.log(usersDB.fetchAll());
  res.render("users", { docTitle: "Users page", path: "/users" });
});

module.exports = router;
