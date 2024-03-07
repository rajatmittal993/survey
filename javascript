var currentQuestion = 0;
var totalQuestions = 5;
var timer;
var timeLeft = 10;

// Sample questions and image URLs
var questions = [
  "Question 1: Which image do you prefer?",
  "Question 2: Which image do you prefer?",
  "Question 3: Which image do you prefer?",
  "Question 4: Which image do you prefer?",
  "Question 5: Which image do you prefer?"
];

function startTimer() {
  timer = setInterval(function() {
    document.getElementById('timer').innerHTML = 'Time left: ' + timeLeft + ' seconds';
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      timeLeft = 10;
      nextQuestion();
    }
  }, 1000);
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < totalQuestions) {
    document.getElementById('question').innerHTML = questions[currentQuestion];
    resetTimer();
  } else {
    // Survey completed
    document.getElementById('questionContainer').innerHTML = 'Survey completed!';
  }
}

function selectImage(imageNumber) {
  // Handle image selection logic here
  clearInterval(timer);
  timeLeft = 10;
  nextQuestion();
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 10;
  startTimer();
}

// Start the survey
window.onload = function() {
  document.getElementById('question').innerHTML = questions[currentQuestion];
  startTimer();
};
