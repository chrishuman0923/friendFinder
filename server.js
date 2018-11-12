//define constants of the application
const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    htmlRoutes = require('./app/routing/htmlRoutes'),
    apiRoutes = require('./app/routing/apiRoutes');

//enable express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(htmlRoutes);
app.use(apiRoutes);

//Log message confirming listening of server
app.listen(port, () => console.log(`Server is listening on port ${port}.`));