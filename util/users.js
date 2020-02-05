// util methods to manage the users table
const db = require("./database");

const fetchAll = () => {
  return db.execute("SELECT * FROM USERS");
};

const getByEmail = email => {
  return db.execute("SELECT * FROM USERS WHERE EMAIL = ?", [email]);
};

const createUser = (username, password) => {
  return db.execute("INSERT INTO USERS SET EMAIL = ?, PWD = ?", [
    username,
    password
  ]);
};

const confirmAddress = emailAddress => {
  return db.execute("UPDATE USERS SET CONFIRMED = true WHERE EMAIL = ?", [
    emailAddress
  ]);
};

module.exports = {
  fetchAll: fetchAll,
  getByEmail: getByEmail,
  createUser: createUser,
  confirmAddress: confirmAddress
};
