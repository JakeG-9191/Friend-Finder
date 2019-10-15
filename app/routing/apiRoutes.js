var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body.userScore)

        var newUser = req.body;

        for (var i = 0; i < newUser.userScore.length; i++) {
            newUser.userScore[i] = parseInt(newUser.userScore[i]);
            console.log(newUser.userScore[i])
        }

        var friendMatch = 0;
        var friendDefault = 30;

        for (var i = 0; i < friends.length; i++) {
            var friendDifference = 0;
            for (var y = 0; y < friends[i].userScore.length; y++) {
                var difference = Math.abs(newUser.userScore[y] - friends[i].userScore[y]);
                friendDifference += difference;
            }

            if (friendDifference < friendDefault) {
                friendMatch = i;
                friendDefault = friendDifference;
            }
        }

        friends.push(newUser)

        res.json(friends[friendMatch])
    });
};