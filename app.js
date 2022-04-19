// Trivia question API
async function getTrivia() {
    let response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
    let returns = await response.json()
    let resultsArray = await returns.results


    console.log(resultsArray);

    // Get array of questions
    const questionArray = [];
    for (let i = 0; i < resultsArray.length; i++) {
        questionArray.push(resultsArray[i].question);
        // return questionArray[i];
    }
    console.log(questionArray)

    // Get array of correct answers
    const correctArray = [];
    for (let i=0; i<resultsArray.length; i++) {
        correctArray.push(resultsArray[i].correct_answer);
        // return correctArray[i];
    }
    console.log(correctArray)

    const incorrectArray1 = [];
    for (let i=0; i<resultsArray.length; i++) {
        incorrectArray1.push(resultsArray[i].incorrect_answers[0]);
        // return incorrectArray1[i];
    }
    console.log(incorrectArray1)

    const incorrectArray2 = [];
    for (let i=0; i<resultsArray.length; i++) {
        incorrectArray2.push(resultsArray[i].incorrect_answers[1]);
        // return incorrectArray2[i];
    }
    console.log(incorrectArray2)

    const incorrectArray3 = [];
    for (let i=0; i<resultsArray.length; i++) {
        incorrectArray3.push(resultsArray[i].incorrect_answers[2]);
        // return incorrectArray3[i];
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


correct = () => {
    correctAnswerBox.classList.add('correct')
    addPoints()
    document.getElementById('ring').classList.add('ringCorrect')
    nextQuestion()
}

incorrect = (evt) => {
    evt.target.classList.add('incorrect')
    document.getElementById('ring').classList.add('ringIncorrect')
    correctAnswerBox.classList.add('correct')
    nextQuestion()
}
for(let i=0; i<iAnswerBoxes.length; i++) {
    iAnswerBoxes[i].addEventListener("click", incorrect, false)
}
correctAnswerBox = document.getElementById('answer1')
correctAnswerBox.addEventListener("click", correct, false)

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
        ,2000)
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

// Keep track of question number
let quesNumber = 1

incrementQues = () => {
    quesNumber++
    let quesNumberBox = document.getElementById('ques')
    quesNumberBox.textContent = quesNumber + "/10"
}

// Fix special characters

}
getTrivia()