const rollButton = document.querySelector(".btn");
const mainTitle = document.querySelector("h1");
const player1Dice = document.querySelector(".img1");
const player2Dice = document.querySelector(".img2");

function rollDice() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    player1Dice.setAttribute("src", `images/dice${randomNumber1}.png`);
    player2Dice.setAttribute("src", `images/dice${randomNumber2}.png`);

    if (randomNumber1 > randomNumber2) {
        mainTitle.innerHTML = "Player 1 Wins! 🎉";
    } else if (randomNumber2 > randomNumber1) {
        mainTitle.innerHTML = "Player 2 Wins! 🎉";
    } else {
        mainTitle.innerHTML = "It's a Draw! 🤝";
    }
}

rollButton.addEventListener("click", rollDice);