//define constants of the application
const path = require('path');

//Routes for application html pages
module.exports = function(app) {
    app.get('/', (req, res) => res.sendFile(
        path.join(__dirname, '..', 'public', 'home.html')
    ));
    
    app.get('/survey', (req, res) => res.sendFile(
        path.join(__dirname, '..', 'public', 'survey.html')
    ));
};