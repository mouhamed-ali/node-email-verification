const express = require("express"),
  router = express.Router(),
  path = require("path"),
  rootDir = require("../util/path"),
  usersDB = require("../util/users");

router.get("/login", (req, res, next) => {
  // return res.sendFile(path.join(rootDir, "views", "login.html")); This is to use when you are not using a template engine
  res.render("login", { docTitle: "Login page" }); // as pug is our template engine, .pug will be added automatically
});

router.post("/login", function(request, response) {
  let username = request.body.username;
  let password = request.body.password;
  if (username && password) {
    usersDB.getByEmail(username).then(result => {
      if (result[0].length < 1) {
        console.log(`${username} was not found in the database`);
        response
          .status(401)
          .send("<h1> Username or password  is incorrect <h1>");
      } else {
        console.log(`User number ${result[0][0].ID} has logged in`);
        response.redirect("/");
      }
    });
  } else {
    console.log("Not authorized");
    response.status(400).send("<h1> Username and password are required <h1>");
  }
});

module.exports = router;
