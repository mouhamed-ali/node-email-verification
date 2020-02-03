// util methods to manage the users table
const db = require("./database");

const fetchAll = () => {
  return db.execute("SELECT * FROM USERS");
};

const getByEmail = email => {
  console.log("getting ID of ", email);
  return db.execute("SELECT ID FROM USERS WHERE EMAIL = ?", [email]);
};

module.exports = {
  fetchAll: fetchAll,
  getByEmail: getByEmail
};
