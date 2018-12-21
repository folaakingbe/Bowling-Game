// Global Variables

var scoreString = [];
var scoreArray = [];
var rollNumber = 0;

// Functions

function strike(frameNumber) {
    
};

function displayScore() {
    var x = document.getElementById("frame-input").value;
    frameString = x.split("-");
    for (var i = 0; i < frameString.length; i++) {
        scoreString += frameString[i];
    }
    // for (var j = 0; j < scoreString.length; j++) {

    // }
    document.getElementById("score").innerHTML = frameString;
    document.getElementById("score").innerHTML = scoreString;
    console.log(scoreString);
    console.log(frameString);
    console.log(frameString[0][0]);

}