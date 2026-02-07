const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
// Enable CORS for all routes
app.use(cors());

app.use('/api/member', require('./routes/member'));
app.use('/api/deposit', require('./routes/deposit'));

module.exports = app;
