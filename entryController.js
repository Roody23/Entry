const Entry = require("./entryModel");

// Create a new entry
exports.postEntry = (req, res) => {
  // Validate request
  if (!req.body.userID || !req.body.Username || !req.body.Date) {
    res.status(400).json({
      message: "Content cannot be empty.",
    });
    return;
  }

  // Create a task
  const entry = new Entry({
    userID: req.body.userID,
    Username: req.body.Username,
    Date: req.body.Date,
  });

  Entry.postEntry(entry, (err, data) => {
    if (err) {
      res.status(500).json({
        message: err.message || "Some error occurred while creating the task.",
      });
    } else {
      res.status(201).json(data);
    }
  });
};
