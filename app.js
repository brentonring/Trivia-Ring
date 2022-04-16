// Trivia question API
async function getTrivia() {
    let response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
    let returns = await response.json()
    let resultsArray = await returns.results

    console.log(resultsArray);
    // console.log(returns.results[0].question)

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
        questionBox.append(questionArray[index]);
    
        let correctBox = document.getElementById('answer1');
        correctBox.append(correctArray[index]);
    
        let incorrectBox1 = document.getElementById('answer2');
        incorrectBox1.append(incorrectArray1[index]);
    
        let incorrectBox2 = document.getElementById('answer3');
        incorrectBox2.append(incorrectArray2[index]);
    
        let incorrectBox3 = document.getElementById('answer4');
        incorrectBox3.append(incorrectArray3[index]);
    }
    appendTrivia(0)
}
getTrivia()


// Choose answer with mouse click
let correctAnswerBox = document.getElementById('answer1')
const iAnswerBoxes = document.getElementsByClassName('iAnswers')

window.onload = () => {
    correct = () => {
        correctAnswerBox.classList.add('correct')
        addPoints()
        document.getElementById('ring').classList.add('ringCorrect')
    }
    
    incorrect = (evt) => {
        evt.target.classList.add('incorrect')
        document.getElementById('ring').classList.add('ringIncorrect')
        correctAnswerBox.classList.add('correct')
    }
    for(let i=0; i<iAnswerBoxes.length; i++) {
        iAnswerBoxes[i].addEventListener("click", incorrect, false)
    }
    correctAnswerBox = document.getElementById('answer1')
    correctAnswerBox.addEventListener("click", correct, false)
}

// Choose answer with arrow keys

// Turn ring green with correct answer, wrong if incorrect

// Give user ten points for correct answer, zero for incorrect
// score +=10

// Keep track of point total
let pts = 0

addPoints = () => {
    pts += 10
    let pointBox = document.getElementById('points')
    pointBox.textContent = pts
}