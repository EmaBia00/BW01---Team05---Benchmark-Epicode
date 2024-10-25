// Array di domande e opzioni
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
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
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
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
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Approximately how many Apple I personal computers were created?",
    correct_answer: "200",
    incorrect_answers: ["100", "500", "1000"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Moore&#039;s law originally stated that the number of transistors on a microprocessor chip would double every...",
    correct_answer: "Year",
    incorrect_answers: ["Four Years", "Two Years", "Eight Years"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "While Apple was formed in California, in which western state was Microsoft founded?",
    correct_answer: "New Mexico",
    incorrect_answers: ["Washington", "Colorado", "Arizona"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "In programming, the ternary operator is mostly defined with what symbol(s)?",
    correct_answer: "?:",
    incorrect_answers: ["??", "if then", "?"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "In HTML, which non-standard tag used to be be used to make elements scroll across the viewport?",
    correct_answer: "&lt;marquee&gt;&lt;/marquee&gt;",
    incorrect_answers: ["&lt;scroll&gt;&lt;/scroll&gt;", "&lt;move&gt;&lt;/move&gt;", "&lt;slide&gt;&lt;/slide&gt;"],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question: "DHCP stands for Dynamic Host Configuration Port.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?",
    correct_answer: "Cheetah",
    incorrect_answers: ["Puma", "Tiger", "Leopard"],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question: "The T-Mobile Sidekick smartphone is a re-branded version of the Danger Hiptop.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What major programming language does Unreal Engine 4 use?",
    correct_answer: "C++",
    incorrect_answers: ["Assembly", "C#", "ECMAScript"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "According to DeMorgan&#039;s Theorem, the Boolean expression (AB)&#039; is equivalent to:",
    correct_answer: "A&#039; + B&#039;",
    incorrect_answers: ["A&#039;B + B&#039;A", "A&#039;B&#039;", "AB&#039; + AB"],
  },
];

// Definizione delle variabili principali
const logo = document.getElementById("logo");
const answersText = document.getElementById("answersText");
const numberSelectedByUser = localStorage.getItem("optionSelected");
console.log(numberSelectedByUser);
let currentQuestionIndex = 0;
let indexQuestionView = 1;
let correctAnswers = 0;
let incorrectAnswers = 0;
let timerInterval;
let questionAnswered = false;

logo.onclick = () => {
  window.open("/src/Welcome Page/welcome.html", "_self");
};
logo.onmouseover = () => {
  logo.style.cursor = "pointer";
};

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
    document.querySelector(".timer-container").style.background = `conic-gradient(#3f3c56 ${percentage}%, #00ffff ${percentage}%)`;

    // Se il tempo è scaduto, passa alla prossima domanda
    if (timeRemaining <= 0) {
      incorrectAnswers++;
      clearInterval(timerInterval);
      goToNextQuestion();
    }
  }, 1000);
}

function randomNum(array, param) {
  const randomNumSet = [];
  let randomNumber = 0;

  while (randomNumSet.length < param) {
    randomNumber = Math.floor(Math.random() * array.length);

    if (!randomNumSet.includes(array[randomNumber])) {
      randomNumSet.push(array[randomNumber]);
    }
  }

  randomNumSet.sort((a, b) => {
    const difficultyOrder = { easy: 1, medium: 2, hard: 3 };
    return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
  });

  return randomNumSet;
}

const questionRandomData = randomNum(questions, numberSelectedByUser);

// Funzione per caricare la domanda
function loadQuestion() {
  questionAnswered = false;
  answersText.classList.add("hide");
  const questionData = questionRandomData[currentQuestionIndex];
  document.getElementById("question-title").textContent = questionData.question;

  const options = [];
  for (let i = 0; i < questionData.incorrect_answers.length; i++) {
    options.push(questionData.incorrect_answers[i]);
  }
  options.splice(Math.floor(Math.random() * questionData.incorrect_answers.length), 0, questionData.correct_answer);

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
  questionStatus.innerHTML = `Question ${indexQuestionView} <span> / ${numberSelectedByUser}</span>`;
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

  if (selectedOption === questionRandomData[currentQuestionIndex].correct_answer) {
    correctAnswers++;
    answersText.innerText = "Great! Correct Answer";
    answersText.style.color = "green";
    console.log("correct", answersText);
  } else {
    incorrectAnswers++;
    answersText.innerText = "Ops! Wrong Answer";
    answersText.style.color = "red";
    console.log("incorrect", answersText);
  }
  answersText.classList.remove("hide");
  setTimeout(goToNextQuestion, 500);
}

// Funzione per passare alla prossima domanda
function goToNextQuestion() {
  if (currentQuestionIndex < numberSelectedByUser - 1) {
    indexQuestionView = 1;
    currentQuestionIndex++;
    loadQuestion();
  } else {
    localStorage.setItem("correctAnswers", correctAnswers);
    localStorage.setItem("incorrectAnswers", incorrectAnswers);
    localStorage.setItem("questionsLength", numberSelectedByUser);
    window.open("/src/Result Page/result.html", "_self");
  }
}

window.onload = loadQuestion;
