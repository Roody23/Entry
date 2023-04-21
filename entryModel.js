const sql = require("../config/db.config.js");

const Entry = function (entry) {
  this.UserID = entry.UserID;
  this.Username = entry.Username;
  this.Task_description = task.Task_description;
  this.Create_date = new Date();
};

Task.getTasks = (userID, result) => {
  sql.query(`SELECT Task_title, Create_date FROM Tasks WHERE UserID = ?`, [userID], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, res);
  });
};

Task.getTask = (userID, taskID, result) => {
  sql.query(`SELECT * FROM Tasks WHERE UserID = ? AND ID = ?`,[userID,taskID], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found task: ", res[0]);
      result(null, res[0]);
      return;
    }