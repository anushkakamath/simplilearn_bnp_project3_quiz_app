// observing the window load event
window.addEventListener('load', (event) => {
    /**
     * when window is loaded completely, we make the ajax call to the quiz api 
     */
    $.ajax( {
        url:'https://opentdb.com/api.php?amount=11&type=multiple',
        success:function(data) {
            // save the question set to browser so that we don't have to call the API again and again
            localStorage.setItem('savedQuestions', JSON.stringify(data.results));
        }
    });

    // retrieve the question set from web storage
    questionSet = JSON.parse(localStorage.getItem('savedQuestions'));
    // initiate the quiz
    initiateQuiz(questionSet);
});


/**
 * 
 * @param {*} questionSet 
 * This fucntion will initiate the quiz, and is called when our questionsets arrive from API
 */
function initiateQuiz(questionSet) {
    // set a quiz state using the quizStatus object to track the status of quiz
    quizStatus = {
        // the question being attempted
        currentQuestion: 1,
        // score of the candidate
        currentScore: 0,
        // percentage obtained
        accuracy: 0,
        // progess == 0 means quiz in progess | progress == 1 means quiz ended
        progess: 0
    }

    //render the first question to user 
    renderQuestion(questionSet[quizStatus.currentQuestion], quizStatus.currentQuestion);

    //render the initial score  
    $("#score").text(quizStatus.currentScore);
    $("#accuracy").text(quizStatus.accuracy);

}

/**
 * 
 * @param {*} question 
 * @param {*} currentQuestion 
 * This fucntion will render the given question to the HTML
 */
function renderQuestion(question, currentQuestion) {
    if(currentQuestion%2==0){
        $("#question-id").text(currentQuestion);
        $("#category").text(question.category);
        $("#difficulty").text(question.difficulty );
        $("#question-body").text(decodeHTMLEntities(question.question));
        $("#option1").text(decodeHTMLEntities(question.correct_answer));
        $("#option2").text(decodeHTMLEntities(question.incorrect_answers[0]));
        $("#option3").text(decodeHTMLEntities(question.incorrect_answers[1]));
        $("#option4").text(decodeHTMLEntities(question.incorrect_answers[2]));
        }
        else{
        $("#question-id").text(currentQuestion);
        $("#category").text(question.category);
        $("#difficulty").text(question.difficulty );
        $("#question-body").text(decodeHTMLEntities(question.question));
        $("#option1").text(decodeHTMLEntities(question.incorrect_answers[0]));
        $("#option2").text(decodeHTMLEntities(question.incorrect_answers[1]));
        $("#option3").text(decodeHTMLEntities(question.correct_answer));
        $("#option4").text(decodeHTMLEntities(question.incorrect_answers[2]));
        }
}

/**
 * 
 * @param {*} option 
 * This function will collect the user's input, evaluate the answer and move to next question
 */
function submitAnswer(option) {
    console.log(quizStatus.progess);
    if(quizStatus.progess == 0) {
        submitted_answer = option.innerText;
        currentQuestion = quizStatus.currentQuestion;
        evaluateAnswer(submitted_answer, currentQuestion);
        if(quizStatus.currentQuestion  > 9) {
            endQuiz();
        } else {
            moveToNextQuestion(currentQuestion);  
        } 
    }
    else {
        endQuiz();
    }
}

/**
 * 
 * @param {*} answer 
 * This function will evaluate the submitted answer against the correct answer and update the score accordingly
 */
function evaluateAnswer(answer) {
    if(answer == decodeHTMLEntities(questionSet[quizStatus.currentQuestion].correct_answer)) {
        quizStatus.currentScore = quizStatus.currentScore + 10;
        $("#score").text(quizStatus.currentScore);  
    }
    total = quizStatus.currentQuestion * 10;
    quizStatus.accuracy = ((quizStatus.currentScore / total ) * 100).toFixed(2);
    $("#accuracy").text(quizStatus.accuracy);
}

/**
 * This function will advance the quiz by one question at a time
 */
function moveToNextQuestion() {
    if(quizStatus.currentQuestion < 10) {
        quizStatus.currentQuestion = quizStatus.currentQuestion + 1;   
        renderQuestion(questionSet[quizStatus.currentQuestion], quizStatus.currentQuestion);
    } else {
        endQuiz();
    }
}

/**
 * This function will simply move to the next question
 */
function skipQuestion() {
    moveToNextQuestion();
}

function endQuiz() {
    quizStatus.progess = 1;
    let bar = confirm("Quiz finished, your score is " +  quizStatus.currentScore +  " with an accuracy of "+ quizStatus.accuracy+"% Attempt again?");
    if (bar) {
        quizStatus.progess = 0;
        window.location.reload();
    }
}

/**
 * 
 * @param {*} text 
 * This is an utility function used to convert the HTML entities sent by the API to chars
 */
function decodeHTMLEntities(text) {
    var entities = [
        ['amp', '&'],
        ['apos', '\''],
        ['#x27', '\''],
        ['#x2F', '/'],
        ['#39', '\''],
        ['#47', '/'],
        ['lt', '<'],
        ['gt', '>'],
        ['nbsp', ' '],
        ['quot', '"'],
        ['#039', '\'']
    ];

    for (var i = 0, max = entities.length; i < max; ++i) 
        text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);

    return text;
}