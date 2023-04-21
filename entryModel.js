const sql = require("./db.config.js");

const Entry = function (entry) {
  this.userID = entry.userID;
  this.Username = entry.Username;
  this.Date = new Date();
};

Entry.getEnteries = (userID, result) => {
  sql.query(`SELECT * FROM Entries WHERE userID = ?`, [userID], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, res);
  });
};

Entry.postEntry = (newEntry, result) => {
  sql.query("INSERT INTO history SET ?", newEntry, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created entry ", { ID: res.insertId, ...newEntry });
    result(null, { ID: res.insertId, ...newEntry });
  });
};

module.exports = Entry;
