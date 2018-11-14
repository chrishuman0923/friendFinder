//define constants of the application
var friendsData = require('../data/friends');

//Route to friends data
function allFriends(req, res) {
    res.json(friendsData);
}

function addFriend(req, res) {
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
}

module.exports = [
    {
        url: '/api/friends',
        method: 'GET',
        handler: allFriends
    },
    {
        url: '/api/friends',
        method: 'POST',
        handler: addFriend
    }
];