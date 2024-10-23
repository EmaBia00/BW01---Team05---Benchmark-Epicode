// Array di domande e opzioni
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// Definizione delle variabili principali
let currentQuestionIndex = 0;
let indexQuestionView = 1;
let correctAnswers = 0;
let incorrectAnswers = 0;
let timerInterval;
let questionAnswered = false;

// Funzione per avviare il timer
function startTimer() {
  let timeRemaining = 60; // Imposta il timer su 60 secondi
  document.getElementById("time-remaining").textContent = timeRemaining;

  clearInterval(timerInterval); // Cancella eventuali timer precedenti

  timerInterval = setInterval(() => {
    timeRemaining--;
    document.getElementById("time-remaining").textContent = timeRemaining;

    // Calcola la percentuale di tempo rimanente
    const percentage = (timeRemaining / 60) * 100;

    // Aggiorna la barra del timer
    document.querySelector(
      ".timer-container"
    ).style.background = `conic-gradient(#00b0ff ${percentage}%, #3f3c56 ${percentage}%)`;

    // Se il tempo è scaduto, passa alla prossima domanda
    if (timeRemaining <= 0) {
      incorrectAnswers++;
      clearInterval(timerInterval);
      goToNextQuestion();
    }
  }, 1000);
}

// Funzione per caricare la domanda
function loadQuestion() {
  questionAnswered = false;
  const questionData = questions[currentQuestionIndex];
  document.getElementById("question-title").textContent = questionData.question;

  const options = [];
  for (let i = 0; i < questionData.incorrect_answers.length; i++) {
    options.push(questionData.incorrect_answers[i]);
  }
  options.splice(
    Math.floor(Math.random() * questionData.incorrect_answers.length),
    0,
    questionData.correct_answer
  );

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = "option";
    label.innerHTML = `<input type="radio" name="answer" value="${index}"> ${option}`;

    label.addEventListener("click", () => handleOptionSelect(option, index));
    optionsContainer.appendChild(label);
  });
  const questionStatus = document.getElementById("question-status");
  indexQuestionView += currentQuestionIndex;
  questionStatus.innerHTML = `Question ${indexQuestionView} <span> / ${questions.length}</span>`;
  startTimer();
}

// Funzione per selezionare l'opzione
function handleOptionSelect(selectedOption, selectedIndex) {
  if (questionAnswered) return;
  questionAnswered = true;
  const options = document.querySelectorAll(".option");
  options.forEach((option, index) => {
    if (index === selectedIndex) {
      option.classList.add("selected");
    } else {
      option.classList.remove("selected");
    }
  });

  if (selectedOption === questions[currentQuestionIndex].correct_answer) {
    correctAnswers++;
  } else {
    incorrectAnswers++;
  }
  setTimeout(goToNextQuestion, 500);
}

// Funzione per passare alla prossima domanda
function goToNextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    indexQuestionView = 1;
    currentQuestionIndex++;
    loadQuestion();
  } else {
    localStorage.setItem("correctAnswers", correctAnswers);
    localStorage.setItem("incorrectAnswers", incorrectAnswers);
    window.open("/src/Result Page/result.html", "_self");
  }
}

window.onload = loadQuestion;
