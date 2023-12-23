const quizDB = [
  {
    question: "Q1 : What is the full form of HTML",
    a: "hello to my land ",
    b: "hey text markup language",
    c: "hello tooo my land ",
    d: "heyper text markup language",
    ans: "ans4",
  },

  {
    question: "Q2 : What is the full form of CSS",
    a: "hello to my land ",
    b: "hey text markup language",
    c: "cascading style sheet ",
    d: "heyper text markup language",
    ans: "ans3",
  },

  {
    question: "Q3 : What is the full form of HTTP",
    a: "hello to my land ",
    b: "hyper text transfer protocol",
    c: "hello tooo my land ",
    d: "heyper text markup language",
    ans: "ans2",
  },

  {
    question: "Q4 : What is the full form of CN",
    a: "Computer Network ",
    b: "hey text markup language",
    c: "hello tooo my land ",
    d: "heyper text markup language",
    ans: "ans1",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");

const showScores = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];

  question.innerText = questionList.question;

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });

  return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submit.addEventListener("click", () => {
  const CheckedAnswer = getCheckAnswer();
  console.log(CheckedAnswer);

  if (CheckedAnswer == quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;

  deselectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScores.innerHTML = `<h3>you scored ${score} / ${quizDB.length} </h3>
    <button class="btn" onclick="location.reload()"> play again </button>  `;

    showScores.classList.remove("showAres");
  }
});
