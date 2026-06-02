const buttons = document.querySelectorAll(".btn-numbers");
const submit = document.querySelector(".submit");
const rating = document.getElementById("rating");
const thanks = document.getElementById("thanks");
const displayer = document.getElementById("displayer");

let selected = null;
let step = 0;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((button) => button.classList.remove("active"));
    button.classList.add("active");
    selected = button.innerText;
  });
});

submit.addEventListener("click", function () {
  step++;
  if (step !== 0 && selected !== null) {
    rating.classList.add("hidden");
    thanks.classList.remove("hidden");
    displayer.innerText = ` You selected ${selected} out of 5`;
  }
});
