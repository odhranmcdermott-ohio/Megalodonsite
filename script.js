// 1. Button + Alert
document.getElementById("diveBtn").addEventListener("click", () => {
  alert("Warning: Oxygen levels stable. Entering Megalodon territory...");
});

// 2. Change text + color
const depthText = document.getElementById("waterPressure");

document.getElementById("descendBtn").addEventListener("click", () => {
  depthText.textContent = "Current Depth: Midnight Zone (1000m)";
  depthText.style.color = "#00d4ff";
  depthText.style.fontWeight = "bold";
});

// 3. User input + logic
const guessBtn = document.getElementById("checkGuess");
const feedback = document.getElementById("logicFeedback");

guessBtn.addEventListener("click", () => {
  const guess = Number(document.getElementById("whaleGuess").value);

  if (guess === 2) {
    feedback.textContent = "Spot on! They needed roughly 2,500 lbs of food daily.";
    feedback.style.color = "#7dffae";
  } else if (guess > 2) {
    feedback.textContent = "Too high! They were huge, but not that hungry.";
    feedback.style.color = "#ff8b8b";
  } else if (guess < 2 && guess > 0) {
    feedback.textContent = "Close, but a bit more than that. Try guessing 2.";
    feedback.style.color = "#ffd966";
  } else {
    feedback.textContent = "Enter a valid number first.";
    feedback.style.color = "#ffd966";
  }
});

// 4. Random fact generator
const facts = [
  "Megalodon had over 250 teeth in its mouth at once.",
  "Their bite force may have exceeded 40,000 pounds per square inch.",
  "Young Megalodons likely lived in coastal nursery areas.",
  "They lived roughly 23 to 3.6 million years ago.",
  "No, they are not still alive in the Mariana Trench.",
  "Megalodon was one of the largest predatory sharks in Earth’s history."
];

document.getElementById("oracleBtn").addEventListener("click", () => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("oracleOutput").textContent = "🦈 " + randomFact;
});
