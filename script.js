let currentQuestion = 0;
let counterRightAnswers = 0;

function init() {
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById('endscreen').style = '';
        document.getElementById('question_body').style = 'display: none';
        document.getElementById('count_result').innerHTML = `${counterRightAnswers}/${questions.length}`;
        document.getElementById('progress_bar').style = `width: 0%`
    } else {
        let question = questions[currentQuestion];

        document.getElementById('question_text').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
        document.getElementById('all_questions').innerHTML = questions.length;
        document.getElementById('current_question').innerHTML = currentQuestion + 1;
    }
    progressBar()
}

function nextQuestion() {
    currentQuestion++
    document.getElementById('next_button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('correct_answer', 'wrong_answer');
    document.getElementById('answer_2').parentNode.classList.remove('correct_answer', 'wrong_answer');
    document.getElementById('answer_3').parentNode.classList.remove('correct_answer', 'wrong_answer');
    document.getElementById('answer_4').parentNode.classList.remove('correct_answer', 'wrong_answer');
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question[`right_answer`]) {
        document.getElementById(selection).parentNode.classList.add('correct_answer');
        counterRightAnswers++;
    } else {
        document.getElementById(selection).parentNode.classList.add('wrong_answer');
        document.getElementById(idRightAnswer).parentNode.classList.add('correct_answer');
    }
    document.getElementById('next_button').disabled = false;
}

function progressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    console.log(percent);
    if (percent < 100) {
        document.getElementById('progress_bar').style = `width: ${percent}%`;
    } else if (percent == 100) {
        document.getElementById('progress_bar').style = `width: ${percent}%`
        document.getElementById('progress_bar').style.borderRadius = '0';
    }

}

function restartGame() {
    currentQuestion = 0;
    counterRightAnswers = 0;
    document.getElementById('endscreen').style = 'display: none';
    document.getElementById('question_body').style = '';
    init();
}
