//define constants of the application
const express = require('express'),
    app = module.exports = express(),
    friends = require('../data/friends'),
    friendData = friends;

//enable express middleware    
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes for application data
app.get('/api/friends', (req, res) => res.json(friendData));

app.post('/api/friends', function (req, res) {
    //Get submitted data and create a new object
    var postData = Object.values(req.body),
        input = {
            name: postData[0].trim(),
            photo: postData[1].trim(),
            scores: []
        };
    
    //Add scores to new object
    for (var i = 2; i < postData.length; i ++) {
        input.scores.push(parseInt(postData[i]));
    }

    friendData.push(input);
});