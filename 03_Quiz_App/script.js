const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "A flashing red traffic light signifies that a driver should do what?",
        answers: [
            { text: "stop", correct: true },
            { text: "speed up", correct: false },
            { text: "proceed with caution", correct: false },
            { text: "honk the horn", correct: false }
        ]
    },
    {
        question: "A pita is a type of what?",
        answers: [
            { text: "fresh fruit", correct: false },
            { text: "flat bread", correct: true },
            { text: "French tart", correct: false },
            { text: "friend bean dip", correct: false }
        ]
    },
    {
        question: "An airplane's black box is usually what color?",
        answers: [
            { text: "black", correct: false },
            { text: "white", correct: false },
            { text: "orange", correct: true },
            { text: "purple", correct: false }
        ]
    }
]


const questionElement = document.querySelector("#question");
const answerBtn = document.querySelector(".answer-buttons");
const nextBtn = document.querySelector("#nextBtn");


let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}


function showQuestion() {

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button)


        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener("click", selectAnswer)
    });
}



function resetState() {
    nextBtn.style.display = "none";
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild)
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerBtn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz()