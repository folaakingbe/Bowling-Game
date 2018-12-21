// Global Variables

var scoreString = [];               // A string of the scores within each frame without the separator
var scoreArray = [];                // An integer array of the number of pins taken down with each roll 
var rollNumber = 0;                 // A tracker to know which roll the program is on
var totalScore = 0;                 // The total score of the player

// Functions

// Reset the used variables for a different string
function resetVariables() {
    scoreString = [];
    scoreArray = [];
    rollNumber = 0;
    totalScore = 0;
}

function displayScore() {
    resetVariables();
    // Turn valid input into an array of strings for each frame
    var input = document.getElementById("frame-input").value;
    var frameString = input.split("-");
    // Obtain a long string of scores without the separator
    for (var i = 0; i < frameString.length; i++) {
        scoreString += frameString[i];
    }
    // Create an integer array of the scores
    for (var j = 0; j < scoreString.length; j++) {
        if (scoreString[j] === "X") {
            scoreArray.push(10);
        }
        else if (scoreString[j] === "/") {
            scoreArray.push(10 - scoreArray[j-1]);
        }
        else {
            scoreArray.push(parseInt(scoreString[j]));
        }
    }
    // Calculate the scores for each of the 10 regular frames
    for (var k = 0; k < 10; k++) {
        var frame = frameString[k];
        var frameScore = 0;
        if (frame[frame.length - 1] === "X") {
            frameScore = scoreArray[rollNumber] + scoreArray[rollNumber + 1] + scoreArray[rollNumber + 2];
            rollNumber += 1;
        }
        else if (frame[frame.length - 1] === "/") {
            frameScore = scoreArray[rollNumber] + scoreArray[rollNumber + 1] + scoreArray[rollNumber + 2];
            
            rollNumber += 2;
        }
        else {
            frameScore = scoreArray[rollNumber] + scoreArray[rollNumber + 1];
            rollNumber += 2;
        }
        totalScore += frameScore;
    }
    // Add score to HTML
    document.getElementById("score").innerHTML = totalScore;
}