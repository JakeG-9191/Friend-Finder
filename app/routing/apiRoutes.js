var express = require("express");
var path = require("path");

var friends = [];

var app = express();

app.get("/api/friends", function (req, res) {
    return res.json(friends)
})

app.post("/api/friends", friends).then(function (data) {
    console.log("friends", data)
})
