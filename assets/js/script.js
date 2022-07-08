// Vars for buttons and elements, global scope
var startBtn = document.getElementById("start");
var highscores = document.getElementById("highscore");
var submitBtn = document.getElementById("submit");
var initials = document.getElementById("initials");
var timeChange = document.getElementById("time");
var timeLeft = 5000;
var start = document.getElementById("main");
var end = document.getElementById("end");
var qBox = document.getElementById("qbox");
var qTitle = document.getElementById("qtitle");
var qContent = document.getElementById("qoption");
var questionI = 0;

// Function to start game
function startGame() {
    start.setAttribute("class", "hidden");
    getQuestions();
}
// Function for questions
function getQuestions() {
    var currentQ = questions[questionI];
    qTitle.textContent = currentQ.question;
    qContent.textContent = "";

    currentQ.options.forEach(function(choice, i) {
        var qOption = document.createElement("button");
        qOption.setAttribute("class", choice);
        qOption.setAttribute("value", choice);
        qOption.textContent = i + 1 + "." + choice;
        // qOption.onClick = qClick;
        qContent.appendChild(qOption)
    });


}
// Function for timer

function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1 || timeLeft === 1) {
      timeChange.textContent = timeLeft;
      timeLeft--;
    } else {
      timeChange.textContent = "";
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);
}

// Function for highscores
function highScore() {
}
// End of game
function endGame() {
  end.setAttribute("class", "");
}
// Call functions
startBtn.onclick = () => {
  startGame();
  countdown();
};
