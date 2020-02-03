const path = require("path");

/*
 * the process.mainModule refers to the module that creates the application
 * filename is the filename of the module
 * with this technic we can get the path to the main directory of our project
 * and we can build paths starting from it
 */
module.exports = path.dirname(process.mainModule.filename);
