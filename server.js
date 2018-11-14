//define constants of the application
const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    path = require('path'),
    //create array of array's containing route data
    routes = [
        ...require(path.join(__dirname,'app','routing','htmlRoutes')),
        ...require(path.join(__dirname,'app','routing','apiRoutes'))
    ];

//enable express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Import routes from files
for(const route of routes) {
    var method = route.method.toLowerCase();

    //Check for valid method
    if (typeof app[method] === 'function') {
        app[method](route.url, route.handler);
    } else {
        throw new Error('Method passed from route file not valid.');
    }
}

//Log message confirming listening of server
app.listen(port, () => console.log(`Server is listening on port ${port}.`));