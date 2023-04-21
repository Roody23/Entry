const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./db.config");
const entryRoutes = require("./entryRoutes");

// Use body-parser to parse requests as JSON
app.use(bodyParser.json());
app.use(express.json());

// User routes
app.use("/", entryRoutes);

// Handle 404 errors
app.use(function (req, res, next) {
  res.status(404).send({ message: "Route " + req.url + " Not found." });
});

// Handle server errors
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({ message: "Internal Server Error" });
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
