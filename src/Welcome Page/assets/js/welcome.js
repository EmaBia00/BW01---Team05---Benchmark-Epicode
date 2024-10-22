const btn = document.querySelector("button");
const checkBox = document.getElementById("check1");

btn.onclick = () => {
  if (checkBox.checked) {
    window.open("/src/Test Page/test.html");
  } else {
    alert("Flaggare la checkbox per continuare");
  }
};
