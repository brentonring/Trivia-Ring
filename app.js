// Trivia question API
async function getTriviaQuestions() {
    let response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
    let returns = await response.json()
    let resultsArray = await returns.results

    console.log(resultsArray);
    // console.log(returns.results[0].question)

    for (let i = 0; i < resultsArray.length; i++) {
        let questions = resultsArray[i].question;
        console.log(questions);
        let questionBox = document.getElementById('questionbox');
        questionBox.append(questions)
    }
}
getTriviaQuestions()
// Choose answer with mouse click

// Choose answer with arrow keys

// Turn ring green with correct answer, wrong if incorrect

// Give user ten points for correct answer, zero for incorrect
// score +=10

// Keep track of point total

