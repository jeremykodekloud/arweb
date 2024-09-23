const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

/**
 * Exports the Express application instance.
 * This allows the app to be imported and used in other parts of the project,
 * such as for testing or extending the application's functionality.
 *
 * @module app
 * @returns {object} The configured Express application instance.
 */

app.get('/', (req, res) => {
  res.send('Hello, Azure Pipelines and GitHub Actions!');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;