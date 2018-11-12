//define constants of the application
const express = require('express'),
    app = module.exports = express(),
    friends = require('../data/friends');

//enable express middleware    
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes for application data
app.get('/api/friends', (req, res) => res.json(friends));

app.post('/api/friends', (req, res) => console.log(data));