const btn = document.querySelector("button");
const checkBox = document.getElementById("check1");
const alertComment = document.getElementById("alertComment");

btn.onclick = () => {
  if (checkBox.checked) {
    window.open("/src/Test Page/test.html", "_self");
  } else {
    alertComment.innerText = "WARNING! Check the box to continue";
    alertComment.style.color = "red";
    alertComment.classList.remove("hide");
  }
};

checkBox.onclick = () => {
  alertComment.classList.add("hide");
};
