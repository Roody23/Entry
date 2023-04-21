const Entry = require("../models/taskModel");

// Get all tasks for a user
exports.getEntry = (req, res) => {
  Task.getEntry(req.body.userID, (err, data) => {
    if (err) {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving tasks.",
      });
    } else {
      res.status(200).json(data);
    }
  });
};
