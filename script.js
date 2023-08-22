document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("play-button");
    const playAgainButton = document.getElementById("play-again-button");
    const resultText = document.getElementById("result");
    const computerChoiceText = document.getElementById("computer-choice"); // New line
    const options = ["Rock", "Paper", "Scissor"];

    playButton.addEventListener("click", playGame);
    playAgainButton.addEventListener("click", resetGame);

    function playGame() {
        const yourChoiceInput = document.getElementById("choice");
        const yourChoice = yourChoiceInput.value
        
        if (!options.includes(yourChoice)) {
            resultText.textContent = "Invalid choice. Please choose from Rock, Paper, or Scissor.";
            return;
        }

        const compChoice = options[Math.floor(Math.random() * options.length)];
        computerChoiceText.textContent = `Computer chose: ${compChoice}`; // New line

        const result = cond(compChoice, yourChoice);
        resultText.textContent = result;

        playButton.disabled = true;
        yourChoiceInput.disabled = true;
        playAgainButton.style.display = "block";
    }

    function resetGame() {
        playButton.disabled = false;
        document.getElementById("choice").disabled = false;
        resultText.textContent = "";
        playAgainButton.style.display = "none";
        document.getElementById("choice").value = "";
    }

    function cond(compChoice, yourChoice) {
        if (compChoice === yourChoice) {
            return "\nMatch Tie";
        } else if (compChoice === "Paper" && yourChoice === "Rock") {
            return "\nComputer Wins";
        } else if (compChoice === "Rock" && yourChoice === "Scissor") {
            return "\nComputer Wins";
        } else if (compChoice === "Scissor" && yourChoice === "Paper") {
            return "\nComputer Wins";
        } else if (yourChoice === "Paper" && compChoice === "Rock") {
            return "\nYou Win";
        } else if (yourChoice === "Rock" && compChoice === "Scissor") {
            return "\nYou Win";
        } else if (yourChoice === "Scissor" && compChoice === "Paper") {
            return "\nYou Win";
        } else {
            return "Something went wrong!";
        }
    }
});
