const express = require("express"),
  router = express.Router(),
  path = require("path"),
  rootDir = require("../util/path"),
  usersDB = require("../util/users"),
  bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken");

router.get("/signup", (req, res, next) => {
  return res.sendFile(path.join(rootDir, "views", "signup.html"));
});

router.post("/signup", function(request, response) {
  let userEmail = request.body.username;
  let password = request.body.password;
  let confirm = request.body.confirm;
  if (confirm !== password) {
    response.status(400).render("error", {
      docTitle: "400 page",
      message: "Password and confirm password must match"
    });
  }
  if (userEmail && password) {
    let userCredentials = { userEmail: userEmail, password: password };
    usersDB
      .getByEmail(userEmail)
      .then(result => {
        if (result[0].length > 0) {
          console.log(`${userEmail} already exist the database`);
          response.status(401).render("error", {
            docTitle: "401 page",
            message: "User already exist. Choose another email address please."
          });
          throw new Error(
            "User already exist. Choose another email address please."
          );
        } else {
          return null;
        }
      })
      .then(() => {
        // hash the password
        return bcrypt.hash(userCredentials.password, 12).then(function(hash) {
          // Store hash in your password DB.
          console.log(
            `creating a new user : ${userCredentials.userEmail} with a hash ${hash}`
          );
          return hash;
        });
      })
      .then(hash => {
        return usersDB.createUser(userCredentials.userEmail, hash);
      })
      .then(() => {
        console.log("userEmail : ", userCredentials.userEmail);
        return generateToken(userCredentials.userEmail);
      })
      .then(token => {
        console.log("the generated token is : ", token);
      })
      .then(() => response.redirect("/login"))
      .catch(err => console.log(err));
  } else {
    console.log("Not authorized");
    response.status(400).render("error", {
      docTitle: "400 page",
      message: "userEmail and password are required "
    });
  }
});

/**
 * this method will generate a token to send to the user via an email
 * we are using jsonwebtoken so we gonna easily generate a token and verify if it's valid
 */
const generateToken = userEmail => {
  // Create a token
  const payload = { user: userEmail };
  const options = { expiresIn: "1d", issuer: "https://your-domain.io" };
  const secret = process.env.JWT_SECRET;
  console.log("secret : ", secret);
  const token = jwt.sign(payload, secret, options);
  console.log("token : ", token);
  return token;
};

module.exports = router;
