const quizData = [
	// obj of questions
	{
		question: 'How old is JS',
		a: '17',
		b: '12',
		c: '15',
		d: '19',
		correct: 'a',
	},
	{
		question: 'What is the best programming language currently ?',
		a: 'Java',
		b: 'C++',
		c: 'C',
		d: 'Python',
		e: 'Javascript',
		correct: 'e',
	},
	{
		question: 'Who is the best basketball Player',
		a: 'Michale Jordan',
		b: 'Magic Johnson',
		c: 'Larry Bird',
		d: 'Lebron James',
	},
	{
		question: 'What does HTML stand for?',
		a: 'Hypertext Markup Language',
		b: 'Hyper Tag Markup Language',
		c: 'Cascading style sheet',
		d: 'JSON object Notation',
		correct: 'a',
	},
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
	deselectAnswers();

	const currentQuizData = quizData[currentQuiz];

	questionEl.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

function getSelected() {
	let answer = undefined;

	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});

	return answer;
}

function deselectAnswers() {
	answerEls.forEach((answerEl) => {
		answerEl.checked = false;
	});
}

submitBtn.addEventListener('click', () => {
	// check to see the answer
	const answer = getSelected();

	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++;
		}

		currentQuiz++;
		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			// alert("You Finished")
			// show results
			quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
		}
	}
});
