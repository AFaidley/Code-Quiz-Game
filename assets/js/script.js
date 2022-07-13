// Vars for buttons and elements, global scope
var startBtn = document.getElementById("start");
var list = document.getElementById("list");
var submitBtn = document.getElementById("submit");
var initials = document.getElementById("initials");
var timeChange = document.getElementById("time");
var clear = document.getElementById("clear");
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
  countdown();
}
// Function for questions
function getQuestions() {
  var currentQ = questions[questionI];
  qTitle.textContent = currentQ.question;
  qContent.textContent = "";
  // Displays the question
  currentQ.options.forEach(function (choice, i) {
    var qOption = document.createElement("button");
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
        clearInterval(timeInterval);
      }
      timeLeft--;
    } else {
      timeChange.textContent = 0;
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);
}

// Saves the highscores to local storage, highscore being the timeLeft
function saveHighscore() {
  var initials1 = initials.value.trim();
  var highscore = JSON.parse(window.localStorage.getItem("highscores")) || [];
  if (initials1 !== "") {
    var scores = {
      score: timeLeft,
      user: initials1,
    };
    highscore.push(scores);
    window.localStorage.setItem("highscores", JSON.stringify(highscore));
  }
  window.location.href = "./highscore.html";
}

// Shows highscore in the highscore page by creating li elements, it appends it to my ol(list)
function showScore() {
  var scoreList = JSON.parse(window.localStorage.getItem("highscores"));
  
//Had to change for-loop to forEach as I was working with an object not an array
  scoreList.forEach(function (score) {
    var li = document.createElement("li");
    li.textContent = score.user + " - " + score.score;

    list.appendChild(li);
  });
}
// Function to clear highscore, had to be called in html due to error showing up otherwise
function clearHighscores() {
  window.localStorage.removeItem("highscores");
// Refreshes the highscores automatically
  window.location.reload();
}

// End of game, hides questions and un-hides the end screen (initials and end message)

function endGame() {
  end.removeAttribute("class", "hidden");
  qBox.setAttribute("class", "hidden");
}

// Call functions
// Had to add startGame, showScore and saveHighscore functions to HTML as error kept presenting itself on highscore page

// Calling showScore function
showScore();
