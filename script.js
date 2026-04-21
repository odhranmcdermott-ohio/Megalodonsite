const facts = [
  "Megalodon had teeth over 7 inches long.",
  "Megalodon was one of the largest predatory sharks ever.",
  "Its name means 'big tooth.'",
  "Scientists learn about Megalodon mostly through fossil teeth.",
  "Megalodon likely hunted large marine animals."
];

const factButton = document.getElementById("factButton");
const factOutput = document.getElementById("factOutput");

if (factButton) {
  factButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factOutput.textContent = facts[randomIndex];
  });
}

function toggleFact(id) {
  const element = document.getElementById(id);
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}

function checkLength() {
  const guess = Number(document.getElementById("lengthGuess").value);
  const result = document.getElementById("guessResult");

  if (!guess) {
    result.textContent = "Enter a number first.";
  } else if (guess >= 50 && guess <= 60) {
    result.textContent = "Nice! That is in the common estimate range.";
  } else {
    result.textContent = "Good guess — many estimates place Megalodon around 50–60 feet.";
  }
}

function showAlert() {
  alert("Nice choice — climate change is one major extinction theory!");
}
