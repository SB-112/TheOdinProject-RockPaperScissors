let humanScore = 0;
let computerScore = 0;
const humanScoreDisplay = document.getElementById('your-score');
const computerScoreDisplay = document.getElementById('computer-score');
const winTextDisplay = document.getElementById('display');
let round = 0;
let gameOver = false;
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
function changeDisplay(){
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
}

function resetGame(){
    gameOver = false;
    round = 0;
    humanScore = 0;
    computerScore = 0
    changeDisplay();
    winTextDisplay.textContent = "New Game has Started!!!";
}


function playRound(humanChoice){
    if(gameOver) return;

    let computerChoice = getComputerChoice();

    if(humanChoice === computerChoice){
        winTextDisplay.textContent = "Draw!";
    }else if((humanChoice === "ROCK") && (computerChoice === "PAPER") || 
            (humanChoice === "PAPER") && (computerChoice === "SCISSORS") ||
            (humanChoice === "SCISSORS") && (computerChoice === "ROCK")){
        computerScore++;
        changeDisplay();
        winTextDisplay.textContent = "Computer Wins!";
    }else{
        humanScore++;
        changeDisplay();
        winTextDisplay.textContent = "Human Wins!";
    }
    round++;
    if(round === 5){
        gameOver = true;
        if(humanScore === computerScore){
            winTextDisplay.textContent = "Final Result: It's a Draw!";
        }else if(humanScore > computerScore){
            winTextDisplay.textContent = "Final Result: Human Wins!";
        }else{
            winTextDisplay.textContent = "Final Result: Computer Wins!";
        }
        setTimeout(resetGame, 2000);
    }
}




