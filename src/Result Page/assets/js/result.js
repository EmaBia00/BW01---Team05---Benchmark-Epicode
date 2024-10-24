const btn = document.querySelector("button");

btn.onclick = () => {
  window.open("/src/Exam Review Page/examReview.html", "_self");
};

let correctAnswers = localStorage.getItem("correctAnswers");
let incorrectAnswers = localStorage.getItem("incorrectAnswers");
let questionsLength = localStorage.getItem("questionsLength");

//Risposte Corrette
const resultCorrect = (correctAnswers) => {
  return (correctAnswers / questionsLength) * 100;
};
const correctPercent = document.getElementById("correctPercent");
correctPercent.innerText = resultCorrect(correctAnswers) + "%";
const correctQuestions = document.getElementById("correctQuestions");
correctQuestions.innerText =
  correctAnswers + "/" + questionsLength + " questions";

//Risposte Sbagliate
const resultWrong = (incorrectAnswers) => {
  return (incorrectAnswers / questionsLength) * 100;
};
const wrongPercent = document.getElementById("wrongPercent");
wrongPercent.innerText = resultWrong(incorrectAnswers) + "%";
const wrongQuestions = document.getElementById("wrongQuestions");
wrongQuestions.innerText =
  incorrectAnswers + "/" + questionsLength + " questions";

//Messaggio Risultato
const messageTxt = document.getElementById("messageTxt");
if (resultCorrect(correctAnswers) >= 60) {
  messageTxt.innerHTML = `Congratulations! <br><strong>You passed the exam.</strong>`;
} else {
  messageTxt.innerHTML = `Try again! <br><strong id="colorTxt">You failed the exam.</strong>`;
  const colorTxt = document.getElementById("colorTxt");
  colorTxt.classList.add("colorTxt");
}

//circle
const circle = document.querySelector(".circle");
circle.style.background = `conic-gradient(#D20094 ${
  100 - resultCorrect(correctAnswers)
}%, #00ffff 0 100%)`;
