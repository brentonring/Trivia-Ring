// Trivia question API
async function getTrivia() {
    let response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
    let returns = await response.json()
    let resultsArray = await returns.results


    // Fix special characters
    // Get array of questions
    const questionArray: any[] = [];
    for (let i = 0; i < resultsArray.length; i++) {
        questionArray.push(he.decode(resultsArray[i].question));
    }

    // Get array of correct answers
    const correctArray: any[] = [];
    for (let i=0; i<resultsArray.length; i++) {
        correctArray.push(he.decode(resultsArray[i].correct_answer));
    }

    // Get arrays of incorrect answers
    const incorrectArray1: any[] = [];
    for (let i=0; i<resultsArray.length; i++) {
        incorrectArray1.push(he.decode(resultsArray[i].incorrect_answers[0]));
    }

    const incorrectArray2: any[] = [];
    for (let i=0; i<resultsArray.length; i++) {
        incorrectArray2.push(he.decode(resultsArray[i].incorrect_answers[1]));
    }

    const incorrectArray3: any[] = [];
    for (let i=0; i<resultsArray.length; i++) {
        incorrectArray3.push(he.decode(resultsArray[i].incorrect_answers[2]));
    }

    const answerBoxes = document.getElementsByClassName('answers')
    let answerBoxesArray: Element[] = [];
    for (let i = 0; i < answerBoxes.length; i++) {
        answerBoxesArray.push(answerBoxes[i]);
    }
    function appendTrivia(i: number, array: any[]) {
        answerBoxesArray = []
            for (let i=0; i < answerBoxes.length; i++) {
                answerBoxesArray.push(answerBoxes[i]);
                }            
        document.getElementById('questionbox').textContent = questionArray[i];
        while (array.length) {
            let random = Math.floor( Math.random()*array.length )
            array[random].textContent = correctArray[i]
            array.splice( random, 1 ); // Remove the item from the array
            random = Math.floor( Math.random()*array.length )
            array[random].textContent = incorrectArray1[i]
            array.splice( random, 1 ); // Remove the item from the array
            random = Math.floor( Math.random()*array.length )
            array[random].textContent = incorrectArray2[i]
            array.splice( random, 1 ); // Remove the item from the array
            random = Math.floor( Math.random()*array.length )
            array[random].textContent = incorrectArray3[i]
            array.splice( random, 1 )
        }
    }
    // Start game
    appendTrivia(0, answerBoxesArray)

    // Keep track of question number
    let quesNumber = 1
    incrementQues = () => {
        quesNumber++
        let quesNumberBox = document.getElementById('ques')
        quesNumberBox.textContent = quesNumber + "/10"
    }

    // Choose answer with mouse click
    // Turn ring green with correct answer, red if incorrect
    correct = (evt: { target: { classList: { add: (arg0: string) => void; }; }; }) => {
        evt.target.classList.add('correct')
        addPoints()
        document.getElementById('ring').classList.add('ringCorrect')
        if(quesNumber<10) {
        nextQuestion()
        } else {
            finish()
        }
    }

    incorrect = (evt: { target: { classList: { add: (arg0: string) => void; }; }; }) => {
        evt.target.classList.add('incorrect')
        document.getElementById('ring').classList.add('ringIncorrect')
        let correctAnswer = correctArray[quesNumber-1]
        if (document.getElementById('answer1').textContent === correctAnswer) {
            document.getElementById('answer1').classList.add('correct')
        } else if (document.getElementById('answer2').textContent === correctAnswer) {
            document.getElementById('answer2').classList.add('correct')
        } else if (document.getElementById('answer3').textContent === correctAnswer) {
            document.getElementById('answer3').classList.add('correct')
        } else if (document.getElementById('answer4').textContent === correctAnswer) {
            document.getElementById('answer4').classList.add('correct')
        }
        if(quesNumber<10) {
            nextQuestion()
            } else {
                finish()
            }    
    }

    // Check answer function
    const checkAnswer = (evt: { target: { textContent: any; }; }) => {
        let correctAnswer = correctArray[quesNumber-1]
        if (evt.target.textContent===correctAnswer) {
            correct(evt)
        } else {
            incorrect(evt)
        }
    }

    for(let i=0; i<answerBoxes.length; i++) {
        answerBoxes[i].addEventListener("click", checkAnswer, false)
    }

    nextQuestion = () => {
        for(let i=0; i<answerBoxes.length; i++) {
            answerBoxes[i].classList.add('wait')}
        setTimeout(() => {
            for(let i=0; i<answerBoxes.length; i++) {
                answerBoxes[i].classList.remove('wait')
            };
            incrementQues()
            let index = quesNumber-1
            appendTrivia(index, answerBoxesArray);
            document.getElementById('ring').classList.remove('ringCorrect', 'ringIncorrect');
            for(let i=0; i<answerBoxes.length; i++) {
                answerBoxes[i].classList.remove('incorrect', 'correct')};
            }
            ,4000)
    }


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

    const playAgain = () => {
        location.reload()
    }
}
getTrivia()

function addPoints() {
    throw new Error("Function not implemented.");
}


function nextQuestion() {
    throw new Error("Function not implemented.");
}


function finish() {
    throw new Error("Function not implemented.");
}


function correct(evt: { target: { textContent: any; }; }) {
    throw new Error("Function not implemented.");
}


function incorrect(evt: { target: { textContent: any; }; }) {
    throw new Error("Function not implemented.");
}


function incrementQues() {
    throw new Error("Function not implemented.");
}
