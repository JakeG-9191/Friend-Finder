var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

app.get("/api/friends", function (req, res){
    return res.json(friends)
})

app.post("/api/friends", friends).then(function(data){
    console.log("friends", data)
});