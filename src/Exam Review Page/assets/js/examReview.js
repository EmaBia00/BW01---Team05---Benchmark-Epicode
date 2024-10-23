const divStars = document.getElementById("stars");
const btn = document.querySelector("button");
const inputTxt = document.getElementById("textFeed");
let selectedRating = 0;

const createStars = (num) => {
  const star = [];
  for (let i = 0; i < num; i++) {
    star[i] = document.createElement("img");
    star[i].src = "../assets/star.svg";
    star[i].classList.add("stars");
    if (i === 0) {
      star[i].classList.add("starsColor");
    }

    star[i].addEventListener("mouseover", () => {
      star.forEach((s) => s.classList.remove("starsColor"));
      for (let j = 0; j <= i; j++) {
        star[j].classList.add("starsColor");
      }
      star[i].style.cursor = "pointer";
      selectedRating = 0;
    });

    star[i].addEventListener("click", () => {
      for (let j = 0; j <= i; j++) {
        star[j].classList.add("starsColor");
      }
      selectedRating = i + 1;
    });

    divStars.appendChild(star[i]);
  }

  btn.addEventListener("click", () => {
    checkIfVoted();
  });
};

const checkIfVoted = () => {
  if (selectedRating === 0 || inputTxt.value === "") {
    alert("Per favore, seleziona almeno una stella e inserisci un commento");
  } else {
    alert(
      `Hai selezionato ${selectedRating} stelle e Hai inserito un commento. Feedback inviato!`
    );
  }
};

createStars(10);
