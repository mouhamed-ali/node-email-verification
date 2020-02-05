const express = require("express"),
  router = express.Router(),
  path = require("path"),
  rootDir = require("../util/path"),
  bcrypt = require("bcryptjs"),
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
      // NOT FOUND USER
      if (result[0].length < 1) {
        console.log(`${username} was not found in the database`);
        response.status(401).render("error", {
          docTitle: "401 page",
          message: "Username or password  is incorrect"
        });
      } else {
        // EMAIL NOT YET CONFIRMED
        if (!result[0][0].CONFIRMED) {
          response.status(401).render("error", {
            docTitle: "401 page",
            message:
              "Please verify you account before login. A verification email has been sent to you email address."
          });
        } else {
          // COMPARE PASSWORDS
          bcrypt.compare(password, result[0][0].PWD).then(res => {
            if (res) {
              response.redirect("/");
            } else {
              response.status(401).render("error", {
                docTitle: "401 page",
                message: "Username or password  is incorrect"
              });
            }
          });
        }
      }
    });
  } else {
    console.log("Not authorized");
    response.status(400).render("error", {
      docTitle: "400 page",
      message: "Username and password are required "
    });
  }
});

module.exports = router;
