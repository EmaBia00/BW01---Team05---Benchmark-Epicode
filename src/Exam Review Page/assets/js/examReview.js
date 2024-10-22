const divStars = document.getElementById("stars");

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
        star[j].style.cursor = "pointer";
      }
    });
    star[i].addEventListener("click", () => {
      for (let j = 0; j <= i; j++) {
        star[j].classList.add("starsColor");
      }
    });
    divStars.appendChild(star[i]);
  }
};

createStars(10);
