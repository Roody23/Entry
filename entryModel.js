const sql = require("../config/db.config.js");

const Entry = function (entry) {
  this.UserID = entry.UserID;
  this.Username = entry.Username;
  this.Create_date = new Date();
};

Task.getEnteries = (userID, result) => {
  sql.query(`SELECT * FROM Entries WHERE userID = ?`, [userID], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, res);
  });
};
