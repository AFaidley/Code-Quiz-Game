// Vars for buttons and elements, global scope
var startBtn = document.getElementById("start");
var highscores = document.getElementById("highscore");
var submitBtn = document.getElementById("submit");
var initials = document.getElementById("initials");
var timeChange = document.getElementById("time");
var timeLeft = 60;
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
// Displays the question
  currentQ.options.forEach(function (choice, i) {
    var qOption = document.createElement("button");
    qOption.setAttribute("class", "choice");
    qOption.setAttribute("value", choice);
    qOption.textContent = i + 1 + ") " + choice;
    qOption.onclick = qClick;
    qContent.appendChild(qOption);
  });
}
// Function to determine whether the correct answer was selected
function qClick() {
  if (this.value !== questions[questionI].answer) {
    timeLeft -= 10;
  }
  // Goes to the next question
  questionI++;
// Ends game when all questions have been answered or gets new question if not
  if (questionI === questions.length) {
    endGame();
  } else {
    getQuestions();
  }
}

// Function for timer

function countdown() {
  var timeInterval = setInterval(() => {
    if (timeLeft >= 1) {
      timeChange.textContent = timeLeft;
      if (questionI === questions.length) {
        clearInterval(timeInterval); }
      timeLeft--;
    } else {
      timeChange.textContent = 0;
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);
}

// Function for highscores
function highScore() {
  
}
// End of game, hides questions and un-hides the end screen (initials and end message)
function endGame() {
  end.setAttribute("class", "");
  qBox.setAttribute("class", "hidden");
}
// Call functions
startBtn.onclick = () => {
  startGame();
  countdown();
};
