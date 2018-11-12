const express = require('express'),
    path = require('path'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(
    path.join(__dirname, '..', 'public', 'home.html')
));

app.get('/survey', (req, res) => res.sendFile(
    path.join(__dirname, '..', 'public', 'survey.html')
));

app.listen(port, () => console.log(`Server is listening on port ${port}.`));