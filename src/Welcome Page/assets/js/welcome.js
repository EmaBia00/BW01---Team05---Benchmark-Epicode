const btn = document.querySelector("button");
const checkBox = document.getElementById("check1");
const alertComment = document.getElementById("alertComment");
const alertSelect = document.getElementById("alertSelect");
const selectElement = document.getElementById("options");

function getSelectedOption() {
  const selectedValue = selectElement.value;
  return selectedValue;
}

let option = getSelectedOption();

selectElement.onclick = () => {
  alertSelect.classList.add("hide");
};

selectElement.onchange = () => {
  option = getSelectedOption();
};

btn.onclick = () => {
  if (option !== "selectNumber") {
    if (checkBox.checked) {
      localStorage.setItem("optionSelected", option);
      window.open("/src/Test Page/test.html", "_self");
    } else {
      alertComment.innerText = "WARNING! Check the box to continue";
      alertComment.style.color = "red";
      alertComment.classList.remove("hide");
    }
  } else {
    alertSelect.classList.remove("hide");
    alertSelect.innerText = "WARNING! Select a number";
    alertSelect.style.color = "red";
  }
};

checkBox.onclick = () => {
  alertComment.classList.add("hide");
};
