function getComputerChoice() {
    let hand = Math.ceil(Math.random() * 3);
    if (hand == 1) return "rock";
    else if (hand == 2) return "paper";
    else return "scissors";
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "Draw!<br>";
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.<br>`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.<br>`;
    }
}

function showScore (){
    return `You: ${humanScore}<br>Computer: ${computerScore}`
};

// Display on page

let resultDiv = document.createElement("div");
document.body.appendChild(resultDiv);

resultDiv.classList.add("result")

document.querySelector(".rock").addEventListener("click", () => {
    resultDiv.innerHTML = `${playRound("rock", getComputerChoice())}<br>${showScore()}`;
});

document.querySelector(".paper").addEventListener("click", () => {
    resultDiv.innerHTML = `${playRound("paper", getComputerChoice())}<br>${showScore()}`;
});

document.querySelector(".scissors").addEventListener("click", () => {
    resultDiv.innerHTML = `${playRound("scissors", getComputerChoice())}<br>${showScore()}`;
});
