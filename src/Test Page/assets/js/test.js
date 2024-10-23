
// Array di domande e opzioni
const questions = [
    {
        question: "The programming language 'Python' is based off a modified version of 'JavaScript'.",
        options: ["True", "False"],
        correct: 1 // False
    },
    {
        question: "When Gmail first launched, how much storage did it provide for your email?",
        options: ["512MB", "5GB", "Unlimited", "1GB"],
        correct: 3 // 1GB
    },
    {
        question: "What does LTS stand for in the software market?",
        options: ["Long Taco Service", "Ludicrous Transfer Speed", "Ludicrous Turbo Speed", "Long Term Support"],
        correct: 3 // Long Term Support
    },
    {
        question: "Linus Torvalds created Linux and Git.",
        options: ["True", "False"],
        correct: 0 // True
    },
    {
        question: "How long is an IPv6 address?",
        options: ["32 bits", "64 bits", "128 bytes", "128 bits"],
        correct: 3 // 128 bits
    },
    {
        question: "What does the 'MP' stand for in MP3?",
        options: ["Music Player", "Multi Pass", "Micro Point", "Moving Picture"],
        correct: 3 // Moving Picture
    },
    {
        question: "In computing, what does LAN stand for?",
        options: ["Long Antenna Node", "Light Access Node", "Land Address Navigation", "Local Area Network"],
        correct: 3 // Local Area Network
    },
    {
        question: "In most programming languages, the operator ++ is equivalent to the statement '+='.",
        options: ["True", "False"],
        correct: 0 // True
    },
    {
        question: "The logo for Snapchat is a Bell.",
        options: ["True", "False"],
        correct: 1 // False
    },
    {
        question: "The C programming language was created by this American computer scientist.",
        options: ["Tim Berners Lee", "al-Khwārizmī", "Willis Ware", "Dennis Ritchie"],
        correct: 3 // Dennis Ritchie
    }
];


// Definizione delle variabili principali
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let timerInterval;

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
        document.querySelector(".timer-container").style.background = 
            `conic-gradient(#00b0ff ${percentage}%, #3f3c56 ${percentage}%)`;

        // Se il tempo è scaduto, passa alla prossima domanda
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            goToNextQuestion();
        }
    }, 1000);
}


// Funzione per caricare la domanda
//function loadQuestion()

// Funzione per selezionare l'opzione
//function handleOptionSelect(selectedIndex)

// Funzione per passare alla prossima domanda
//function goToNextQuestion()

// Funzione per mostrare i risultati
//function showResults()