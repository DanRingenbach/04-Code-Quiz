startBtn = document.getElementById("start-btn");
startPage = document.getElementById("start-page");
questionPage = document.getElementById("quiz-container");
endPage = document.getElementById("end-page");
question = document.getElementById("question");
submit = document.getElementById("submit")
// highscore = document.getElementById("highscore")
answer1 = document.getElementById("answer-1");
answer2 = document.getElementById("answer-2");
answer3 = document.getElementById("answer-3");
answer4 = document.getElementById("answer-4");
input = document.getElementById("input")
highscorePage = document.getElementById("highscore-page")
highscoreList = document.getElementById("highscoreList")
counter = 0;
timeLeft = 60;
elem = document.getElementById('stopwatch');

questionList = [
    {
        question: "What is JS?",
        answers: [
            { answer1: "Javascript", correct: true },
            { answer2: "Johnson&Johnson", correct: false },
            { answer3: "Jesus", correct: false },
            { answer4: "Just Sayin'", correct: false },
            { correctAnswer: "Javascript" }
        ]
    },
    {
        question: "When was JavaScript created?",
        answers: [
            { answer1: "1995", correct: true },
            { answer2: "2020", correct: false },
            { answer3: "1999", correct: false },
            { answer4: "Yesterday", correct: false },
            { correctAnswer: "1995" }
        ]
    }, {
        question: "Who invented JavaScript?",
        answers: [
            { answer1: "John Doe", correct: false },
            { answer2: "John Deere", correct: false },
            { answer3: "Barak Obama", correct: false },
            { answer4: "Brenden Eich", correct: true },
            { correctAnswer: "Brenden Eich" }
        ]
    }, {
        question: "How big was the first computer?",
        answers: [
            { answer1: "200sqft", correct: false },
            { answer2: "The eye of a needle", correct: false },
            { answer3: "Bus sized", correct: false },
            { answer4: "about 1,800sqft", correct: true },
            { correctAnswer: "about 1,800sqft" }
        ]
    }];

startBtn.addEventListener("click", function () {

    timerId = setInterval(function function1() {
        if (timeLeft === -1) {
            clearTimeout(timerId);
            elem.setAttribute("class","hide")
        } else if (counter > 3) {
            elem.setAttribute("class","hide")
            clearTimeout(timerId);
        } else {
            elem.innerHTML = timeLeft;
            timeLeft--;
            console.log(timeLeft)
        }
    }, 1000)
});

function checkAnswer(event) {
    var userAnswer = event.target.textContent
    console.log(userAnswer)
    var currentQuestion = questionList[counter]
    var correctAnswer = questionList[counter].answers[4].correctAnswer
    console.log(currentQuestion)
    counter = counter + 1
    if (userAnswer !== correctAnswer) {
        timeLeft = timeLeft - 10
    }
    console.log(userAnswer)
    console.log(correctAnswer)


    nextQuestion();
}

function nextQuestion() {

    //  timerId = setInterval(countdown, 1000);
    // counter = counter + 1
    if (counter <= 3) {
        answer1.addEventListener("click", checkAnswer);
        answer2.addEventListener("click", checkAnswer);
        answer3.addEventListener("click", checkAnswer);
        answer4.addEventListener("click", checkAnswer);
        question.textContent = questionList[counter].question;
        answer1.textContent = questionList[counter].answers[0].answer1;
        answer2.textContent = questionList[counter].answers[1].answer2;
        answer3.textContent = questionList[counter].answers[2].answer3;
        answer4.textContent = questionList[counter].answers[3].answer4;
    } else {
        endPage.setAttribute("class", "show");
        questionPage.setAttribute("class", "hide");
        actualTime = parseInt(timeLeft) + 1;
        score.textContent = "Your score is " + actualTime;
        submit.addEventListener("click", function () {
            totalScore = input.value +"-"+ actualTime 
            localStorage.setItem("highscore", totalScore)
            endPage.setAttribute("class", "hide")
            highscorePage.setAttribute("class", "show")
            var playerScore = document.createElement("li")
            playerScore.textContent = localStorage.getItem("highscore")
            highscorePage.append(playerScore)
            
        });
        return
    }
}

startBtn.addEventListener("click", function () {
    startPage.setAttribute("class", "hide");
    questionPage.setAttribute("class", "show");

    question.textContent = questionList[counter].question;
    answer1.textContent = questionList[counter].answers[0].answer1;
    answer2.textContent = questionList[counter].answers[1].answer2;
    answer3.textContent = questionList[counter].answers[2].answer3;
    answer4.textContent = questionList[counter].answers[3].answer4;
    nextQuestion();
    // answer1.addEventListener("click", nextQuestion);
    // answer2.addEventListener("click", nextQuestion);
    // answer3.addEventListener("click", nextQuestion);
    // answer4.addEventListener("click", nextQuestion);




});


