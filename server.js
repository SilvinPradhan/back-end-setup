const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('express');
require('dotenv').config();

// APP
const app = express();

// Middleware

// Routes

// Execute
const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
