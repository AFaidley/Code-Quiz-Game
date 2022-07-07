// Vars for buttons and elements, global scope
var startBtn = document.getElementById('start');
var highscores = document.getElementById('highscore');
var submitBtn = document.getElementById('submit');
var initials = document.getElementById('initials');
var timeChange = document.getElementById('time');

var questions = require('./questions');

// Function to start game
function startGame() {
    var start = document.getElementById('main');
    start.setAttribute('class', 'hidden');

    getQuestions();
}
// Function for questions
function getQuestions() {
    
};

// Function for timer

// Function for highscores

// End of game 

// call functions
startBtn.onclick = startGame;