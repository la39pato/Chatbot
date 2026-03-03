import Tennis from "./tennis.js";

let tennis = new Tennis();

const scoreDisplay = document.getElementById("score");
const player1Button = document.getElementById("p1");
const player2Button = document.getElementById("p2");

function updateScore() {
    const currentScore = tennis.score();
    scoreDisplay.textContent = currentScore;

    if (
        currentScore === "Game for Player 1" ||
        currentScore === "Game for Player 2"
    ) {
        setTimeout(() => {
            tennis = new Tennis(); // reinicia el juego
            scoreDisplay.textContent = tennis.score();
        }, 1000); // espera 1.5 segundos antes de reiniciar
    }
}

player1Button.addEventListener("click", () => {
    tennis.player1Scores();
    updateScore();
});

player2Button.addEventListener("click", () => {
    tennis.player2Scores();
    updateScore();
});