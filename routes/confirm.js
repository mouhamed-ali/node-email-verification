const express = require("express"),
  router = express.Router(),
  jwt = require("jsonwebtoken"),
  tokensDB = require("../util/tokens"),
  usersDB = require("../util/users");

router.get("/confirmation", (req, res, next) => {
  let caller = req.protocol + "://" + req.get("host") + req.originalUrl;
  let token = req.query.token;
  const options = { expiresIn: "1d", issuer: "https://your-domain.io" };
  // verify makes sure that the token hasn't expired and has been issued by us
  jwt.verify(token, process.env.JWT_SECRET, options, function(err, decoded) {
    if (err) {
      console.log(err);
      res.status(400).render("error", {
        docTitle: "400 page",
        message:
          "We were unable to find a valid token. Your token may have expired."
      });
    } else {
      // Get the user Email from the decoded token
      let userEmail = decoded.user;
      console.log(
        `Receiving the confirmation of this email address : ${userEmail} from ${caller}`
      );
      usersDB
        .confirmAddress(userEmail)
        .then(() => {
          return tokensDB.updateLink(userEmail, caller, req.get("User-Agent"));
        })
        .then(() => res.render("login", { docTitle: "Login page" }))
        .catch(err => console.log(err));
    }
  });
});

module.exports = router;
