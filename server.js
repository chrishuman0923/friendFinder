//define constants of the application
const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

//Import routes from route files
require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

//enable express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Log message confirming listening of server
app.listen(port, () => console.log(`Server is listening on port ${port}.`));