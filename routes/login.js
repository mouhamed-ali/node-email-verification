const express = require("express"),
  router = express.Router(),
  path = require("path"),
  rootDir = require("../util/path"),
  usersDB = require("../util/users");

router.get("/login", (req, res, next) => {
  return res.sendFile(path.join(rootDir, "views", "login.html"));
});

router.post("/login", function(request, response) {
  let username = request.body.username;
  let password = request.body.password;
  if (username && password) {
    usersDB.getByEmail(username).then(result => {
      if (result[0].length < 1) {
        console.log(`${username} was not found in the database`);
        response.status(401).send("Unauthorized user");
      } else {
        console.log(`User number ${result[0][0].ID} has logged in`);
        response.redirect("/");
      }
    });
  } else {
    console.log("Not authorized");
    response.status(401).send("Unauthorized user");
  }
});

module.exports = router;
