// Trivia question API
async function getTriviaQuestions() {
    let response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
    let questions = await response.json()
    console.log(questions)
}
getTriviaQuestions()
// Choose answer with mouse click

// Choose answer with arrow keys

// Turn ring green with correct answer, wrong if incorrect

// Give user ten points for correct answer, zero for incorrect

// Keep track of point total

