const express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  path = require("path"),
  commonRoutes = require("./routes/common"),
  loginRoutes = require("./routes/login"),
  signupRoutes = require("./routes/signup"),
  port = 3000;

// specify the template engine : we will use pug
app.set("view engine", "pug"); // app.set will sets a key-value object across the app, you can get it with app.get('key')
app.set("views", "views"); // this optional as our templates dir is already views

// check why we are using this middleware here : https://www.npmjs.com/package/body-parser#bodyparserurlencodedoptions
app.use(bodyParser.urlencoded({ extended: false }));

// to serve static routes. for example if in your html file you are using css files. you have to use this configuration
// check the index.html file to see how to import the main.css file
app.use(express.static(path.join(__dirname, "public")));

// "/" is the default value here so we can just use app.use(routes);
// but in the case you would like to serve routes under a context like /admin you have to use app.use("/admin", routes);
app.use("/", commonRoutes);
app.use(loginRoutes);
app.use(signupRoutes);

// the __dirname is the current directory of this file
app.use((req, res, next) => {
  res.status(400).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(port, () => console.log(`Node app listening on port ${port}!`));
