// util methods to manage the users table
const db = require("./database");

const fetchAll = () => {
  return db.execute("SELECT * FROM TOKENS");
};

const getByUserID = userID => {
  return db.execute("SELECT * FROM TOKENS WHERE USER_ID = ?", [userID]);
};

const addNewLink = (userID, token, ipAddress, userAgent) => {
  return db.execute(
    "INSERT INTO TOKENS SET USER_ID = ?, TOKEN = ?, IP_ADDRESS = ?, USER_AGENT = ?",
    [userID, token, ipAddress, userAgent]
  );
};

module.exports = {
  fetchAll: fetchAll,
  getByUserID: getByUserID,
  addNewLink: addNewLink
};
