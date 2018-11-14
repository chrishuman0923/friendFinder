//define constants of the application
const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    path = require('path');

//Import route options from files
require(path.join(__dirname,'app','routing','htmlRoutes'))(app);
require(path.join(__dirname,'app','routing','apiRoutes'))(app);

//enable express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Log message confirming listening of server
app.listen(port, () => console.log(`Server is listening on port ${port}.`));