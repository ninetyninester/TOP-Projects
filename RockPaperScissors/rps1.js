function getComputerChoice(){
    let hand = Math.ceil(Math.random()*3)
    if(hand == 1){
        return "rock";
    }
    else if(hand == 2){
        return "paper";
    }
    else return "scissors";
}

function getHumanChoice(){
    let input = prompt ("Enter rock, paper or scissors");
    return input.trim().toLowerCase();
}

function playRound(humanChoice,computerChoice){

    if(humanChoice==computerChoice){
        return "Draw!";
    }
    else if(
        (humanChoice=="rock" && computerChoice=="scissors") || 
        (humanChoice=="paper" && computerChoice=="rock") || 
        (humanChoice=="scissors" && computerChoice=="paper")
        ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    }
    else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame (){
    for(let i=1; i<=5;i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log(`Round ${i}`);
        console.log("Human Choice: ",humanSelection);
        console.log("Computer Choice: ",computerSelection);
        console.log(playRound(humanSelection,computerSelection));
        console.log("Human Score: ",humanScore);
        console.log("Computer Score: ",computerScore);
    }
    if (humanScore==computerScore){
        console.log("It's a tie!");
    }
    else if (humanScore>computerScore){
        console.log("You won the game!!!");
    }
    else {
        console.log("You lost the game...");
    }
}

playGame();