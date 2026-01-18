let Choice = ["Rock", "Paper", "Scissors"];

let humanScore = 0;
let computerScore = 0;

let roundCount = 1;

const rocBtn = document.querySelector("#rocBtn");
rocBtn.addEventListener("click", () => getHumanChoice("Rock"));

const papBtn = document.querySelector("#papBtn");
papBtn.addEventListener("click", () => getHumanChoice("Paper"));

const sciBtn = document.querySelector("#sciBtn");
sciBtn.addEventListener("click", () => getHumanChoice("Scissors"));

const resBtn = document.querySelector("#resBtn");
resBtn.addEventListener("click", resetGame);


function getComputerChoice() {
    let computerChoice = Choice[Math.floor(Math.random() * Choice.length)];
    return(
        computerChoice
    );
};

function getHumanChoice(humanChoice) {
    playGame(getComputerChoice(), humanChoice);
};

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
    document.getElementById("round_count").textContent = "Round 1";
    document.getElementById("score_computer").textContent = "Computer Score: 0";
    document.getElementById("score_human").textContent = "Human Score: 0";
    document.getElementById("instruct").textContent = "Make your choice, to play this game!";
    document.getElementById("game_buttons").style.visibility = "visible";
    document.getElementById("resBtn").style.visibility = "collapse";
};

function playRound (computerChoice, humanChoice) {
    console.log("Human: " + humanChoice);
    console.log("Computer: " + computerChoice);
    if ( computerChoice === "Rock" && humanChoice === "Scissors" ) {
        computerScore++;
        document.getElementById("score_computer").textContent = "Computer Score: " + computerScore;
        console.log("Computer Wins! Rock beats Scissors.")
        return (
            "Computer Wins! Rock beats Scissors."
        );
    } else if ( computerChoice === "Paper" && humanChoice === "Rock" ) {
        computerScore++;
        document.getElementById("score_computer").textContent = "Computer Score: " + computerScore;
        console.log("Computer Wins! Paper beats Rock.")
        return (
            "Computer Wins! Paper beats Rock."
        );
    } else if ( computerChoice === "Scissors" && humanChoice === "Paper" ) {
        computerScore++;
        document.getElementById("score_computer").textContent = "Computer Score: " + computerScore;
        console.log("Computer Wins! Scissors beats Paper.")
        return (
            "Computer Wins! Scissors beats Paper."
        );
    } else if ( computerChoice === "Scissors" && humanChoice === "Rock" ) {
        humanScore++;
        document.getElementById("score_human").textContent = "Human Score: " + humanScore;
        console.log("Human Wins! Rock beats Scissors.")
        return (
            "Human Wins! Rock beats Scissors."
        );
    } else if ( computerChoice === "Rock" && humanChoice === "Paper" ) {
        humanScore++;
        document.getElementById("score_human").textContent = "Human Score: " + humanScore;
        console.log("Human Wins! Paper beats Rock.")
        return (
            "Human Wins! Paper beats Rock."
        );
    } else if ( computerChoice === "Paper" && humanChoice === "Scissors" ) {
        humanScore++;
        document.getElementById("score_human").textContent = "Human Score: " + humanScore;
        console.log("Human Wins! Scissors beats Paper.")
        return (
            "Human Wins! Scissors beats Paper."
        );
    } else {
        console.log("Tie!")
        return (
            "Tie!"
        );
    };
}

function playGame(computerChoice, humanChoice) {
    roundCount++;
    const result = playRound(computerChoice,  humanChoice)
    if (roundCount < 5) {
        document.getElementById("round_count").textContent = "Round " + roundCount + ". " + result;
    } else {
        let winner = computerScore > humanScore 
            ? "The Computer Wins!"
            : computerScore === humanScore 
                ? "It is a Tie!"
                : "The Human Wins!"
        document.getElementById("round_count").textContent = "Game Over. " + " " + winner;
        document.getElementById("instruct").textContent = "Click the reset button to start over.";
        document.getElementById("game_buttons").style.visibility = "collapse";
        document.getElementById("resBtn").style.visibility = "visible";
    };
}