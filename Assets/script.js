var state = 'start';

var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startButton = document.querySelector("#start-button");
var submitScoreButton = document.querySelector("#submit-score");
var quizTitle = document.querySelector("#title");
var questionsEl = document.querySelector("#questions");

var questions = [
    {question: "One", possibleAnswers: [1,2,3,4], correct: 0 },
    {question: "Two", possibleAnswers: [5,6,7,8], correct: 3 },
    {question: "Three", possibleAnswers: [9,10,11,12], correct: 2 },
    {question: "Four", possibleAnswers: [13,14,15,16], correct: 1 },
];
var cursor = 0;

function displayState() {
    if (state === 'start') {
        startEl.style.display = 'block';
        quizEl.style.display = 'none';
        endEl.style.display = 'none';
    }
    if (state === 'quiz') {
        startEl.style.display = 'none';
        quizEl.style.display = 'block';
        endEl.style.display = 'none';
        displayQuestion();
    }
    if (state === 'end') {
        startEl.style.display = 'none';
        quizEl.style.display = 'none';
        endEl.style.display = 'block';
    }
}

function init() {
    displayState();
}

function reset() {
    state = 'start';
    cursor = 0;
    init();
}

startButton.addEventListener("click", function(){
    state = 'quiz';
    displayQuestion();
    displayState();
});


questionsEl.addEventListener("click", function (event) {
var element = event.target;
if (element.matches('')) {
    var index = Array.from(element.parentElement.children).indexOf(element);
    console.log(index);
    cursor++;

    if (cursor >= questions.length) {
        state = 'end';
        displayState();
    } else {
        displayQuestion();
    }
    }
});


function displayQuestion() {

    var titleText = questions[cursor].question; 
    quizTitle.textContent = titleText;

    var firstAnswer = questions[cursor].possibleAnswers[0];
    var firstAnswerBtn = document.createElement("button");
    firstAnswerBtn.textContent = firstAnswer;
    questionsEl.append(firstAnswerBtn);
}

submitScoreButton.addEventListener("click", function(){
    reset();
});

init();