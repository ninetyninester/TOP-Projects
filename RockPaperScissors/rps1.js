function getComputerChoice() {
    let hand = Math.ceil(Math.random() * 3);
    if (hand == 1) return "rock";
    else if (hand == 2) return "paper";
    else return "scissors";
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) 
    {
        return "Draw!<br>";
    } 
    else if (
              (humanChoice == "rock" && computerChoice == "scissors") ||
              (humanChoice == "paper" && computerChoice == "rock") ||
              (humanChoice == "scissors" && computerChoice == "paper")
            )
    {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.<br>`;
    }
     else
     {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.<br>`;
     }
}

function showScore (){

    if(humanScore>=5){
    return `You: ${humanScore}<br>Computer: ${computerScore} <br> <br> Congratulation, you won the game!!!<br><br>Thanks for playing.`;
    }
    else if (computerScore>=5){
    return `You: ${humanScore}<br>Computer: ${computerScore} <br> <br> Sorry, you lose...<br><br>Thanks for playing.`;
    }
    else return `You: ${humanScore}<br>Computer: ${computerScore}`;
};

function isGameOver(){
    return humanScore >=5 || computerScore >=5;
}

// Display on page

let resultDiv = document.createElement("div");
document.body.appendChild(resultDiv);

resultDiv.classList.add("result")

document.querySelector(".rock").addEventListener("click", () => {
    if(isGameOver()) return;
    resultDiv.innerHTML = `${playRound("rock", getComputerChoice())}<br>${showScore()}`;
});

document.querySelector(".paper").addEventListener("click", () => {
    if(isGameOver()) return;
    resultDiv.innerHTML = `${playRound("paper", getComputerChoice())}<br>${showScore()}`;
});

document.querySelector(".scissors").addEventListener("click", () => {
    if(isGameOver()) return;
    resultDiv.innerHTML = `${playRound("scissors", getComputerChoice())}<br>${showScore()}`;
});

document.querySelector(".reset").addEventListener("click", () => {
    location.reload();});
