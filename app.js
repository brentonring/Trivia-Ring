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
        // String(questions);
        console.log(questionArray)
        let questionBox = document.getElementById('questionbox');
        questionBox.append(questionArray[i]);
    }

    // Get array of correct answers
    // const correctArray = 
}
getTrivia()

// Choose answer with mouse click
// const answerBoxes = document.getElementsByClassName('answers')
// window.onload = () => {
//     answerBoxes.addEventListener("click")
// }

// Choose answer with arrow keys

// Turn ring green with correct answer, wrong if incorrect

// Give user ten points for correct answer, zero for incorrect
// score +=10

// Keep track of point total

