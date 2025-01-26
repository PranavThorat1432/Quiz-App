const questions = [
    {
        question: "Which is Largest animal in the World?",
        answers: [
            {text: "Shark", correct: "false"},
            {text: "Blue Whale", correct: "true"},
            {text: "Elephant", correct: "false"},
            {text: "Giraffe", correct: "false"},
        ]
    },
    {
        question: "How many continents are there?",
        answers: [
            {text: "6", correct: "false"},
            {text: "4", correct: "false"},
            {text: "7", correct: "true"},
            {text: "5", correct: "false"},
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {text: "Mars", correct: "true"},
            {text: "Jupiter", correct: "false"},
            {text: "Earth", correct: "false"},
            {text: "Neptune", correct: "false"},
        ]
    },
    {
        question: "What is the largest country by land area?",
        answers: [
            {text: "America", correct: "false"},
            {text: "China", correct: "false"},
            {text: "India", correct: "false"},
            {text: "Russia", correct: "true"},
        ]
    },
    {
        question: "Which animal is known as the king of the jungle?",
        answers: [
            {text: "Lion", correct: "true"},
            {text: "Elephant", correct: "false"},
            {text: "Gorilla", correct: "false"},
            {text: "Tiger", correct: "false"},
        ]
    },
    {
        question: "Which is the Smallest Country in the World?",
        answers: [
            {text: "Bhutan", correct: "false"},
            {text: "Nepal", correct: "false"},
            {text: "Vatican City", correct: "true"},
            {text: "Shri Lanka", correct: "false"},
        ]
    },
    {
        question: "Which country invented pizza?",
        answers: [
            {text: "India", correct: "false"},
            {text: "Italy", correct: "true"},
            {text: "France", correct: "false"},
            {text: "Germany", correct: "false"},
        ]
    },
    {
        question: "What is the largest desert in the world?",
        answers: [
            {text: "Sahara Dessert", correct: "false"},
            {text: "Thar Dessert", correct: "false"},
            {text: "Dessert", correct: "false"},
            {text: "The Antarctic Desert", correct: "true"},
        ]
    },
    {
        question: "What was the first artificial Earth satellite?",
        answers: [
            {text: "Sputnik 1", correct: "true"},
            {text: "Chandrayan", correct: "false"},
            {text: "Apollo-11", correct: "false"},
            {text: "Mission Mangal", correct: "false"},
        ]
    },
    {
        question: "Which ocean is the largest in the world?",
        answers: [
            {text: "Atlantic Ocean", correct: "false"},
            {text: "Indian Ocean", correct: "false"},
            {text: "Pacific Ocean", correct: "true"},
            {text: "Arctic Ocean", correct: "false"},
        ]
    },
];

const questionElement = document.getElementById("question");
const ansBtns = document.getElementById("ans-btns");
const nextBtn = document.getElementById("next-btn");

let currQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currQuestionIndex = 0;
    score = 0;
    nextBtn.innerText = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currQuestion = questions[currQuestionIndex];
    let questionNo = currQuestionIndex + 1;
    questionElement.innerText = questionNo + ". " + currQuestion.question;

    currQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        ansBtns.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while(ansBtns.firstChild) {
        ansBtns.removeChild(ansBtns.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;

    } else {
        selectedBtn.classList.add("incorrect"); 
    }
    Array.from(ansBtns.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextBtn.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again!";
    nextBtn.style.display = "block";
}

function handleNextBtn() {
    currQuestionIndex++;
    if(currQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if(currQuestionIndex < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
});

startQuiz();