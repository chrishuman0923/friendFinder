//define constants of the application
var friendsData = require('../data/friends');

//Route to friends data
function allFriends(req, res) {
    res.json(friendsData);
}

function addFriend(req, res) {
    //Submit data to local variable
    friendsData.push(req);

    //Send response code to complete 'handshake' with client
    res.status(200).end();
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