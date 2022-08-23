var state = 'start';

var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startButton = document.querySelector("#start-button");
var submitScoreButton = document.querySelector("#submit-score");
var quizTitle = document.querySelector("#quiz#title");
var questionsEl = document.querySelector("#questions");

var questions = [
    {number: "One", possibleAnswers: [1,2,3,4], correct: 0 },
    {number: "Two", possibleAnswers: [5,6,7,8], correct: 3 },
    {number: "Three", possibleAnswers: [9,10,11,12], correct: 2 },
    {number: "Four", possibleAnswers: [13,14,15,16], correct: 1 },
];
var cursor = 0;

function displayState() {
    if (state === 'start') {
        startEl.style.display = 'block';
    }
    if (state === 'quiz') {
        quizEl.style.display = 'block';
        displayQuestion();
    }
    if (state === 'end') {
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
    displayQuestion();
    displayState();
});


quizTitle.addEventListener("click", function (event) {
var element = event.target;
if (element.matches('h2')) {
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
    state = 'quiz';
    var titleText = questions [cursor]; 
    quizTitle.textContent = titleText;
}

submitScoreButton.addEventListener("click", function(){
    reset();
});

init();