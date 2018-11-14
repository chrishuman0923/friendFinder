//define constants of the application
var friendsData = require('../data/friends');

//Routes for application data
module.exports = function(app) {
    app.get('/api/friends', (req, res) => res.json(friendsData));

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

        friendsData.push(input);
    });
};