const path = require('path');

// This module finds where the main file that starts the app is located at.
module.exports = path.dirname(process.mainModule.filename)