// 1. Button + Alert
document.getElementById('diveBtn').addEventListener('click', () => {
    alert("Warning: Oxygen levels stable. Entering Megalodon territory...");
});

// 2. Change Something (Text & Color)
const depthText = document.getElementById('waterPressure');
document.getElementById('descendBtn').addEventListener('click', () => {
    depthText.textContent = "Current Depth: Midnight Zone (1000m)";
    depthText.style.color = "#00d4ff";
    depthText.style.fontWeight = "bold";
});

// 3. User Input + Logic (If/Else)
const guessBtn = document.getElementById('checkGuess');
const feedback = document.getElementById('logicFeedback');

guessBtn.addEventListener('click', () => {
    const guess = document.getElementById('whaleGuess').value;
    
    if (guess == 2) {
        feedback.textContent = "Spot on! They needed roughly 2,500 lbs of food daily.";
        feedback.style.color = "#4cff4c";
    } else if (guess > 2) {
        feedback.textContent = "Too high! They weren't THAT hungry.";
        feedback.style.color = "#ff4c4c";
    } else {
        feedback.textContent = "A bit more than that. Try guessing 2.";
        feedback.style.color = "#ffcc00";
    }
});

// 4. Random Fact Generator
const facts = [
    "Megalodon had over 250 teeth in its mouth at once.",
    "Their bite force was 40,000 pounds per square inch.",
    "The nursery areas for Megalodon pups were in shallow coastal waters.",
    "They lived roughly 23 to 3.6 million years ago.",
    "No, they are NOT still alive in the Mariana Trench!"
];

document.getElementById('oracleBtn').addEventListener('click', () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('oracleOutput').textContent = "📜 " + randomFact;
});
