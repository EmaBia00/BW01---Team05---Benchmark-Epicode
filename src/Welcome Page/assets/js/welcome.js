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
  if (checkBox.checked) {
    if (option !== "selectNumber") {
      localStorage.setItem("optionSelected", option);
      window.open("/src/Test Page/test.html", "_self");
    } else {
      alertSelect.classList.remove("hide");
      alertSelect.innerText = "WARNING! Select a number";
      alertSelect.style.color = "red";
    }
  } else {
    alertComment.innerText = "WARNING! Check the box to continue";
    alertComment.style.color = "red";
    alertComment.classList.remove("hide");
  }
};

checkBox.onclick = () => {
  alertComment.classList.add("hide");
};
