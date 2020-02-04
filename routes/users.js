const express = require("express"),
  router = express.Router(),
  usersDB = require("../util/users");

// show all users of the application
router.get("/users", (req, res, next) => {
  usersDB
    .fetchAll()
    .then(result => {
      res.render("users", {
        docTitle: "Users page",
        path: "/users",
        users: result[0]
      });
    })
    .catch(err => console.log(err));
});

module.exports = router;
