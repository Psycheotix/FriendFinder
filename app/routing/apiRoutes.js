

// LOAD DATA//
// These data sources hold arrays of information 

var possibleFriends = require("../data/friends");
var friends = require("../data/friends");


// ROUNTING

    //API GET REQUESTS
//====================================
module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(possibleFriends)
    });
       // API POST REQUESTS
//=====================================

app.post("/api/friends", function(req, res){

    //ADD COMPATABILITY LOGIC HERE
    var lowestDiff = null;
    var bestMatch = null;
         var newFriend =  req.body;
         friends.forEach( friend =>{
             var totalDiff = 0;

            friend.scores.forEach((score, index )=> {//for loop using method forEach and it is taking the score of friends and comparing it to other friends
                var scoreDiff =  score - newFriend.scores[index];
                totalDiff += Math.abs(scoreDiff);
            });

            if(lowestDiff === null || totalDiff < lowestDiff) {
                lowestDiff = totalDiff
                bestMatch = friend
            }

         });
        friends.push(newFriend);

        
         res.send(bestMatch);



});

 // CLEAR OUT DATA
app.post("/api/clear", function(req, res){
    // empty arrays
    possibleFriends.length = [];
    friendAnswers.length = [];

    res.json({ ok: true });

});



};


 


