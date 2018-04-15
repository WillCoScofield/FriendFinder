var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 7000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Server started and listening
app.listen(PORT, function () {
    console.log("App is listening on PORT: " + PORT);
});