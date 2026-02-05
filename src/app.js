const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/member', require('./routes/member'));
app.use('/api/deposit', require('./routes/deposit'));

module.exports = app;
