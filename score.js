// Global Variables

var scoreString = [];
var scoreArray = [];
var rollNumber = 0;
var totalScore = 0;

// Functions

function getSum(total, sum) {
    return total + sum;
};

function displayScore() {
    var scoreString = [];
    var scoreArray = [];
    var rollNumber = 0;
    var totalScore = 0;
    var input = document.getElementById("frame-input").value;
    var frameString = input.split("-");
    for (var i = 0; i < frameString.length; i++) {
        scoreString += frameString[i];
    }
    console.log(scoreString);
    for (var j = 0; j < scoreString.length; j++) {
        if (scoreString[j] === "X" || scoreString[j] === "/") {
            scoreArray.push(10);
        }
        else {
            scoreArray.push(parseInt(scoreString[j]));
        }
    }
    for (var k = 0; k < 10; k++) {
        var frame = frameString[k];
        console.log(frame);
        var frameScore = 0;
        if (frame[frame.length - 1] === "X") {
            frameScore = scoreArray[rollNumber] + scoreArray[rollNumber + 1] + scoreArray[rollNumber + 2];
            rollNumber += 1;
        }
        else if (frame[frame.length - 1] === "/") {
            frameScore = 10 + scoreArray[rollNumber + 2];
            
            rollNumber += 2;
        }
        else {
            frameScore = scoreArray[rollNumber] + scoreArray[rollNumber + 1];
            rollNumber += 2;
        }
        totalScore += frameScore;
        console.log(totalScore);
        
    }
    
    document.getElementById("score").innerHTML = totalScore;
    console.log(scoreString);
    console.log(frameString);
    console.log(scoreArray);
    console.log(frameString[0][0]);
}