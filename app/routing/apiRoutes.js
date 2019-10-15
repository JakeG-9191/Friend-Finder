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
        };

        var friendMatch = 0;
        var friendDefault = 50;

        // for (var i = 0; i < friends.length; i++) {
        //     var friendDifference = 0;
        //     for (var x = 0; x < friends[i].userScore.length; x++) {
        //         var difference = Math.abs(newUser.userScore[x] - friends[i].userScore[x]);
        //         friendDifference += difference;
        //     };


        //     if (friendDifference < friendDefault) {
        //         friendMatch = i;
        //         friendDefault = friendDifference;
        //     };
        // };
        friends.push(newUser)

        res.json(friends[friendMatch])
    });
};