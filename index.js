let btns = document.querySelectorAll(".btn");
const compResult = document.querySelector("#comp");
const playerResult = document.querySelector("#player");
const restart = document.querySelector("#restart");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {

        let compValues = ["Rock", "Paper", "Scissors"];
        let compChoice = compValues[Math.floor(Math.random() * 3)];
        console.log(compChoice);

        let playerChoice = btn.getAttribute("data-value")
        console.log(playerChoice);

        if (playerChoice === compChoice) {
            alert("It is draw")
        } else if (
            playerChoice === "Paper" && compChoice === "Rock" ||
            playerChoice === "Rock" && compChoice === "Scissors" ||
            playerChoice === "Scissors" && compChoice === "Paper"
            ) {
            alert("You win")
        } else {
            alert("You lose")
            }
        compResult.innerHTML = compChoice;
        playerResult.innerHTML = playerChoice;
    })
});

restart.addEventListener("click", () => {
    compResult.textContent = "";
    playerResult.textContent = "";
})


