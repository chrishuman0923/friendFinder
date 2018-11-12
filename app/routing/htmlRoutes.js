//define constants of the application
const express = require('express'),
    path = require('path'),
    app = module.exports = express();

//enable express middleware
app.use(express.urlencoded({ extended: true }));

//Routes for application html pages
app.get('/', (req, res) => res.sendFile(
    path.join(__dirname, '..', 'public', 'home.html')
));

app.get('/survey', (req, res) => res.sendFile(
    path.join(__dirname, '..', 'public', 'survey.html')
));