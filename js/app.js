const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");

const moveButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
};

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", moveButton);

yesBtn.addEventListener("click", () => {
    question.textContent = "You just made my day ❤️🥹";
    document.querySelector(".btn-group").innerHTML =
        `<p style="font-size:1.2rem">See you soon 😉My Dear Pavi Ma</p>`;
});
