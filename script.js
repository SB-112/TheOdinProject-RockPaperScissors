function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch (choice){
        case 0:
            return "ROCK"
        case 1:
            return "PAPER"
        case 2:
            return "SCISSORS"
    }
}

function getHumanChoice(){
    let humanChoice = prompt("What's your choice?: ")?.toUpperCase();
    return humanChoice
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "Draw";
    }else if((humanChoice === "ROCK") && (computerChoice === "PAPER")){
        computerScore++;
        return "Computer Wins!";
    }else if((humanChoice === "PAPER") && (computerChoice === "SCISSORS")){
        computerScore++;
        return "Computer Wins!";
    }else if((humanChoice === "SCISSORS") && (computerChoice === "ROCK")){
        computerScore++;
        return "Computer Wins!";
    }else{
        humanScore++;
        return "Human Wins!";
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        alert(playRound(humanSelection, computerSelection));
        alert(`Current Score:\n Human: ${humanScore}\n Computer: ${computerScore}`);
    }
    if(humanScore > computerScore){
        alert("Human is the WINNER!");
    }else if(computerScore > humanScore){
        alert("Computer is the WINNER!");
    }else{
        alert("Game is a DRAW");
    }
}

playGame(); 



