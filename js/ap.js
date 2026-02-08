const questionEl = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const btnGroup = document.querySelector(".btn-group");

const questions = [
    "Do you believe in first impressions? ❤️",
    "Can We go for Coffee or Tea? ☕🍵",
    "Late-night talks or morning walks? 🌙🌅",
    "Can I steal you for a date this weekend? 😉"
];

let currentStep = 0;

function loadQuestion() {
    questionEl.textContent = questions[currentStep];
}

function moveNoButton() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

yesBtn.addEventListener("click", () => {
    currentStep++;

    if (currentStep < questions.length) {
        loadQuestion();
    } else {
        showFinalScreen();
    }
});

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

function showFinalScreen() {
    questionEl.textContent = "Good choice 😌❤️ i'll Be Thare We Can Do Lot";
    btnGroup.innerHTML = `
        <p style="font-size:1.2rem">Now you owe me a coffee ☕ Pavi</p>
    `;
}

loadQuestion();


questionEl.textContent = `${currentStep + 1}/${questions.length} — ${questions[currentStep]}`;


