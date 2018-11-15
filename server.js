// DEPENDENCIES
// ===================================================

var express = require("express");
var bodyParser = require('body-parser');

// EXPRESS CONFIGURATION
// ===================================================

var app = express(); // CREATING EXPRESS SERVER

var PORT = process.env.PORT || 3300;

//SETING TO HANDLE DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'));

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// ROUTES

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
});