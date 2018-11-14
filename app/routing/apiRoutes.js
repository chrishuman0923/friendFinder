//define constants of the application
var friendsData = require('../data/friends');

//Route to friends data
function allFriends(req, res) {
    res.json(friendsData);
}

function addFriend(req, res) {
    var entry = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        };

    //convert scores from strings to numbers
    for(var score of req.body.scores) {
        entry.scores.push(parseInt(score));
    }

    getClosestFriend(entry, res);
}

function getClosestFriend(entry, res) {
    var match = {
            name: '',
            photo: ''
        },
        TotalDifference = 41; //Maximum difference for exact opposite responses + 1
    
    //Loop through list of friends
    for(var i = 0; i < friendsData.length; i++) {
        var scoreDiff = 0;

        //Loop through scores
        for(var x = 0; x < friendsData[i].scores.length; x++) {
            var friendScore = friendsData[i].scores[x],
                entryScore = entry.scores[x];

            scoreDiff += Math.abs(friendScore - entryScore);
        }

        if (scoreDiff < TotalDifference) {
            //update difference to be closer
            TotalDifference = scoreDiff;

            //update object with closest (lower) match 
            match.name = friendsData[i].name;
            match.photo = friendsData[i].photo;
        }
    }
    
    //Add entry to local variable
    friendsData.push(entry);
    
    //Send response code to complete 'handshake' with client
    res.status(200).json(match);
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