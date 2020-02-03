// util methods to manage the users table
const db = require("./database");

const fetchAll = () => {
  return db.execute("SELECT * FROM USERS");
};

const getByEmail = email => {
  console.log("getting ID of ", email);
  return db.execute("SELECT ID FROM USERS WHERE EMAIL = ?", [email]);
};

const createUser = (username, password) => {
  return db.execute("INSERT INTO USERS SET EMAIL = ?, PWD = ?", [
    username,
    password
  ]);
};

module.exports = {
  fetchAll: fetchAll,
  getByEmail: getByEmail,
  createUser: createUser
};
