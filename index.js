// Guarda o valor selecionado
let selectedRating = null;

const buttons = document.querySelectorAll(".btn-numbers");
const submit = document.querySelector(".submit");
const resultText = document.querySelector(".h1");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    selectedRating = button.innerText;

    buttons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");
  });
});

if (submit) {
  submit.addEventListener("click", () => {
    if (!selectedRating) {
      alert("Please select a rating!");
      return;
    }

    localStorage.setItem("rating", selectedRating);

    globalThis.location.href = "thanks.html";
  });
}

if (resultText) {
  const rating = localStorage.getItem("rating");

  if (rating) {
    resultText.innerText = `You selected ${rating} out of 5`;
  }
}