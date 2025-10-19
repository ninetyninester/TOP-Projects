// functions

// convert the output - number to string

function handConverter(hand){
    if(hand==1){
        return 'Rock'
    }
    else if(hand==2){
        return 'Paper'
    }
    else if(hand==3){
        return 'Scissors'
    }
}

// players input

function getPlayerChoice(playerInput){

playerInput = prompt("Please enter yout option 1-Rock / 2-paper / 3-Scissors: ")

    if(playerInput==1 || playerInput==2 || playerInput==3){
        return playerInput
        }
    else{
        alert('Please, enter 1, 2 or 3.')
        playerInput = prompt("Please enter yout option 1-Rock / 2-paper / 3-Scissors: ")
        }
    }

// computer's input

function getComputerChoice (max){
    return Math.ceil(Math.random()*max)

}

// outcome

function outcome(){


if(playerInput==computerInput){
    result = 'Draw'
}

else if(playerInput==1 && computerInput==3 || playerInput==2 && computerInput==1 || playerInput==3 && computerInput==2){
    result = `You Win!`
    beats = `${handConverter(playerInput)} beats ${handConverter(computerInput)}!`
}

else{
    result = `You Lose!`
    beats = `${handConverter(computerInput)} beats ${handConverter(playerInput)}!`} 
}

getPlayerChoice()
getComputerChoice()
computerInput = getComputerChoice (3)
console.log(result,beats)