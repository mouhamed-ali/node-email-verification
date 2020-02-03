const express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  path = require("path"),
  routes = require("./routes/routes"),
  port = 3000;

// check why we are using this middleware here : https://www.npmjs.com/package/body-parser#bodyparserurlencodedoptions
app.use(bodyParser.urlencoded({ extended: false }));

// "/" is the default value here so we can just use app.use(routes);
// but in the case you would like to serve routes under a context like /admin you have to use app.use("/admin", routes);
app.use("/", routes);

// the __dirname is the current directory of this file
app.use((req, res, next) => {
  res.status(400).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(port, () => console.log(`Node app listening on port ${port}!`));
