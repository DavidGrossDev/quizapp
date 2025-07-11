let currentQuestion = 0;

function init() {
    document.getElementById('all_questions').innerHTML = questions.length;
    document.getElementById('current_question').innerHTML = currentQuestion + 1;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question_text').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer_1'];
    document.getElementById('answer2').innerHTML = question['answer_2'];
    document.getElementById('answer3').innerHTML = question['answer_3'];
    document.getElementById('answer4').innerHTML = question['answer_4'];
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++
    } else {
        currentQuestion = 0;
    }
    init();
}