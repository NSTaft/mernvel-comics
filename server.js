// requiring important modules
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
require('dotenv').config()
require('./config/database')

// starting express application
const app = express()

app.use(logger('dev'));

// middleware
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/users', require('./routes/api/users'))

// catch all routes
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// port variable
const port = process.env.PORT || 3001;

// code that notifies that express app is running successfully
app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
});