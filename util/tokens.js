// util methods to manage the users table
const db = require("./database");

const fetchAll = () => {
  return db.execute("SELECT * FROM TOKENS");
};

const getByUserID = userID => {
  return db.execute("SELECT * FROM TOKENS WHERE USER_ID = ?", [userID]);
};

const addNewLink = (userID, token) => {
  return db.execute("INSERT INTO TOKENS SET USER_ID = ?, TOKEN = ?", [
    userID,
    token
  ]);
};

const updateLink = (emailAddress, ipAddress, userAgent) => {
  return db.execute(
    "UPDATE TOKENS SET IP_ADDRESS = ?, USER_AGENT = ? WHERE USER_ID = ( SELECT ID FROM USERS WHERE EMAIL = ? )",
    [ipAddress, userAgent, emailAddress]
  );
};

module.exports = {
  fetchAll: fetchAll,
  getByUserID: getByUserID,
  addNewLink: addNewLink,
  updateLink: updateLink
};
