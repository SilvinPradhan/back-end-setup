const express = require('express');
const path = require('path'); // allows to dynamically build when we call it from current directory to where we actually go
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('express');

if (process.env.NODE_ENV === 'development') require('dotenv').config();

// APP
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));

	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}
// Routes
app.get('/api', (req, res) => {
	res.json({ message: 'You just hit the End Point' });
});

// Execute
const port = process.env.PORT || 8000;
app.listen(port, (error) => {
	if (error) throw error;
	console.log(`Server listening at http://localhost:${port}`);
});
