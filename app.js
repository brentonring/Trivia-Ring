// Trivia question API
async function getTrivia() {
    let response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
    let returns = await response.json()
    let resultsArray = await returns.results


    console.log(resultsArray);
    // Fix special characters
    // Get array of questions
    const questionArray = [];
    for (let i = 0; i < resultsArray.length; i++) {
        questionArray.push(he.decode(resultsArray[i].question));
    }
    console.log(questionArray)

    // Get array of correct answers
    const correctArray = [];
    for (let i=0; i<resultsArray.length; i++) {
        correctArray.push(he.decode(resultsArray[i].correct_answer));
    }
    console.log(correctArray)

    // Get arrays of incorrect answers
    const incorrectArray1 = [];
    for (let i=0; i<resultsArray.length; i++) {
        incorrectArray1.push(he.decode(resultsArray[i].incorrect_answers[0]));
    }
    console.log(incorrectArray1)

    const incorrectArray2 = [];
    for (let i=0; i<resultsArray.length; i++) {
        incorrectArray2.push(he.decode(resultsArray[i].incorrect_answers[1]));
    }
    console.log(incorrectArray2)

    const incorrectArray3 = [];
    for (let i=0; i<resultsArray.length; i++) {
        incorrectArray3.push(he.decode(resultsArray[i].incorrect_answers[2]));
    }
    console.log(incorrectArray3)

function appendTrivia(index) {
    let questionBox = document.getElementById('questionbox');
    questionBox.textContent = questionArray[index];

    let correctBox = document.getElementById('answer1');
    correctBox.textContent = correctArray[index];

    let incorrectBox1 = document.getElementById('answer2');
    incorrectBox1.textContent = incorrectArray1[index];

    let incorrectBox2 = document.getElementById('answer3');
    incorrectBox2.textContent = incorrectArray2[index];

    let incorrectBox3 = document.getElementById('answer4');
    incorrectBox3.textContent = incorrectArray3[index];
}
// Start game
appendTrivia(0)


// Choose answer with mouse click
let correctAnswerBox = document.getElementById('answer1')
const iAnswerBoxes = document.getElementsByClassName('iAnswers')

// Keep track of question number
let quesNumber = 1

incrementQues = () => {
    quesNumber++
    let quesNumberBox = document.getElementById('ques')
    quesNumberBox.textContent = quesNumber + "/10"
}


correct = (evt) => {
    evt.target.classList.add('correct')
    addPoints()
    document.getElementById('ring').classList.add('ringCorrect')
    if(quesNumber<10) {
    nextQuestion()
    } else {
        finish()
    }
}

incorrect = (evt) => {
    evt.target.classList.add('incorrect')
    document.getElementById('ring').classList.add('ringIncorrect')
    correctAnswerBox.classList.add('correct')
    if(quesNumber<10) {
        nextQuestion()
        } else {
            finish()
        }    
}

// Check answer function
checkAnswer = (evt) => {
    let correctAnswer = correctArray[quesNumber-1]
    if (evt.target.innerHTML===correctAnswer) {
        correct(evt)
    } else {
        incorrect(evt)
    }
}

for(let i=0; i<iAnswerBoxes.length; i++) {
    iAnswerBoxes[i].addEventListener("click", checkAnswer, false)
}
correctAnswerBox.addEventListener("click", checkAnswer, false)

nextQuestion = () => {
    correctAnswerBox.classList.add('wait');
    for(let i=0; i<iAnswerBoxes.length; i++) {
        iAnswerBoxes[i].classList.add('wait')}
    setTimeout(() => {
        correctAnswerBox.classList.remove('wait');
        for(let i=0; i<iAnswerBoxes.length; i++) {
            iAnswerBoxes[i].classList.remove('wait')
        };
        incrementQues()
        let index = quesNumber-1
        appendTrivia(index);
        document.getElementById('ring').classList.remove('ringCorrect', 'ringIncorrect');
        correctAnswerBox.classList.remove('correct');
        for(let i=0; i<iAnswerBoxes.length; i++) {
            iAnswerBoxes[i].classList.remove('incorrect')};
        }
        ,4000)
}

// Choose answer with arrow keys

// Turn ring green with correct answer, red if incorrect

// Give user ten points for correct answer, zero for incorrect
// score +=10

// Keep track of point total
let pts = 0

addPoints = () => {
    pts += 10
    let pointsBox = document.getElementById('points')
    pointsBox.textContent = pts
}



// Finish game, show user their score
finish = () => {
    document.getElementById('finalscore').textContent = pts
    setTimeout (() => {
        document.getElementById('finish').removeAttribute("hidden")
        document.getElementsByTagName('main')[0].setAttribute('hidden', false)
        document.getElementById('ring').classList.add('ringFinish')
        document.getElementById('replay').addEventListener("click", playAgain, false)
    }, 4000)
}

playAgain = () => {
    location.reload()
}

}
getTrivia()