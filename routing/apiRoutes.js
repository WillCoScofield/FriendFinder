var friendsArray = require("../data/friends.js");
// var surveyScore = require("../data/friendsArray");

module.exports = function (app) {
    app.get("/api/friends", function (req, resp) {
        resp.send(friendsArray);
    })

    app.post("/api/friends", function (req, resp) {
        console.log("Entire Object Contents: ");
        console.log(req.body)
        console.log("======");
        console.log("Scores: ");
        console.log(req.body.scores);


        var userScores = req.body.scores;

        //console.log(typeof+req.body.scores[0])

        // surveyScore.push(req.body.scores);
        // console.log("======");
        // console.log("Stored Survey Scores: ");
        // console.log(surveyScore);
        var bestMatch = 0;
        var bestScore = 50;
        if (friendsArray.friendsArray.length > 1) {
            for (person in friendsArray.friendsArray) {
                var currentScore = friendsArray.friendsArray[person].scores;
                var diff = 0;
                for (i in userScores) {
                    diff += Math.abs(userScores[i] - currentScore[i]);
                }
                console.log('Score with ' + friendsArray.friendsArray[person].name + ': ' + diff);
                if (diff < bestScore) {
                    bestScore = diff;
                    bestMatch = person;
                }
            }
        }
        console.log("BEST:" );
        console.log(bestScore, bestMatch);
        resp.send(friendsArray.friendsArray[bestMatch]);
        friendsArray.friendsArray.push(req.body);
        console.log("====ARRAY NOW=====")
        console.log(friendsArray);
        console.log("")
        console.log()
    });
}

//look at surveyScore[0] and subtract friend1's[0] score from it and add it to the totalDiff with friend1.w

//repeat with friend2 etc...store totalDiff with friend2

//compare all totalDiff variables for smallestDiff, smallest = new best friend

