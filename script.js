let currentQuestion = 0;
let counterRightAnswers = 0;

function init() {
    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        showEndscreen(counterRightAnswers);
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

function showEndscreen(counterRightAnswers) {
    document.getElementById('display_content').innerHTML =
        `<div class="content_main_finish">
            <div class="content_main_finish_head">
                <img class="finish_img" src="./assets/img/brainresult.png" alt="">
                <span class="clr_blck">COMPLETE<br> HTML QUIZ</span>
            </div>
            <div class="content_main_finish_score">
                            <span class="clr_blue">YOUR SCORE</span>
                            <p class="clr_blck">${counterRightAnswers}/10</p>
            </div>
            <div class="content_main_finish_buttons">
                <button>SHARE</button>
                <button>REPLAY</button>
            </div>
        </div>`
}