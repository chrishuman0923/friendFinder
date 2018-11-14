//create dependency
const path = require('path');

//Route to main html page
function displayRoot(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
}

//Route to survey html page
function displaySurvey(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'survey.html'));
}

module.exports = [
    {
        url: '/',
        method: 'GET',
        handler: displayRoot
    },
    {
        url: '/survey',
        method: 'GET',
        handler: displaySurvey
    }
];