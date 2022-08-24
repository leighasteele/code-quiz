var state = 'start';

var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startButton = document.querySelector("#start-button");
var submitScoreButton = document.querySelector("#submit-score");
var quizTitle = document.querySelector("#title");
var questionsEl = document.querySelector("#questions");

var questions = [
    { question: "Which flower is associated with bad luck?", possibleAnswers: ["lillies", "roses", "peonies", "azaleas"], correct: 0 },
    { question: "What is the largest moth in the world?", possibleAnswers: ["atlas", "hercules", "deathead", "luna"], correct: 0 },
    { question: "How many species of turtles are there?", possibleAnswers: [100, "200-300", "350-400", "one thousand"], correct: 2 },
    { question: "How many teeth do foxes have?", possibleAnswers: [30, 42, 50, 35], correct: 1 },
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

startButton.addEventListener("click", function () {
    state = 'quiz';
    displayQuestion();
    displayState();
});


questionsEl.addEventListener("click", function (event) {
    var element = event.target;


    if (element.type === 'submit') {
        var clickedAnswer = element.textContent
        var clickedIndex = questions[cursor].possibleAnswers.indexOf(clickedAnswer);
        console.log(clickedIndex === questions[cursor].correct);
    }

});


function displayQuestion() {
    questionsEl.innerHTML = ''
    var titleText = questions[cursor].question;
    quizTitle.textContent = titleText;

    var firstAnswer = questions[cursor].possibleAnswers[0];
    var firstAnswerBtn = document.createElement("button");
    firstAnswerBtn.textContent = firstAnswer;
    questionsEl.append(firstAnswerBtn);

    var secondAnswer = questions[cursor].possibleAnswers[1];
    var secondAnswerBtn = document.createElement("button");
    secondAnswerBtn.textContent = secondAnswer;
    questionsEl.append(secondAnswerBtn);

    var thirdAnswer = questions[cursor].possibleAnswers[2];
    var thirdAnswerBtn = document.createElement("button");
    thirdAnswerBtn.textContent = thirdAnswer;
    questionsEl.append(thirdAnswerBtn);

    var fourthAnswer = questions[cursor].possibleAnswers[3];
    var fourthAnswerBtn = document.createElement("button");
    fourthAnswerBtn.textContent = fourthAnswer;
    questionsEl.append(fourthAnswerBtn);


}

submitScoreButton.addEventListener("click", function () {
    reset();
});

init();