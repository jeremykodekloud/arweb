"use strict";

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

/**
 * Exports the Express application instance.
 * This allows the app to be imported and used in other parts of the project,
 * such as for testing or extending the application's functionality.
 *
 * @module app
 * @returns {object} The configured Express application instance.
 */

app.get('/', function (req, res) {
  res.send('Hello, Azure Pipelines and GitHub Actions!');
});
if (require.main === module) {
  app.listen(port, function () {
    console.log("Server running on port ".concat(port));
  });
}
module.exports = app;