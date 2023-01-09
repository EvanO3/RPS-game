const rock = document.querySelector('#rock');

rock.addEventListener('click', function(){
    let playerSelection ='rock'
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
});
console.log(rock)

const paper = document.querySelector('.paper');

paper.addEventListener('click', function(){
         let playerSelection ='paper';
         let computerSelection =getComputerChoice();
         playRound(playerSelection, computerSelection);
});

const scissors = document.querySelector('.scissors');

scissors.addEventListener('click', function(){
         let playerSelection ='scissors';
         let computerSelection =getComputerChoice();
         playRound(playerSelection, computerSelection);
});
const playerAmount = document.querySelector('#player-score');
const compAmount = document.querySelector('#computer-score');
const results = document.querySelector('#results');
let playerScore =0;
let compScore=0;
let tie =0;


// Gets the computers choice

const  rps  = ["rock", "paper", "scissors"];
function getComputerChoice(){
      const choice = rps[Math.floor(Math.random()*rps.length)]
      return choice;   
      }


//Win method

playerWin =()=>{
console.log(++playerScore);
playerScore.innerHTML = "Your Score is: " + playerScore;
}

compWin = ()=>{
    console.log(++compScore);
    compScore.innerHTML = "Your Score is: " + compScore;
}

tieAmount = ()=>{
   console.log(++tie);
    tie.innerHTML = "Tie rounds " +tie;
}



playRound = (playerSelection, compSelection)=>{
    if(playerSelection == "rock" && compSelection == "paper"){
    compWin();
    }
    else if(playerSelection=='rock' && compSelection=='rock'){
        tieAmount();
    }
    else if(playerSelection=='rock'&& compSelection=='scissors'){
           playerWin();
    }
    if(playerSelection=='paper' && compSelection=='rock'){
       playerWin();
    }
    else if(playerSelection== 'paper' && compSelection=='paper'){
        tieAmount();
    }
    else if(playerSelection=='paper' && compSelection=='scissors'){
                    compWin();
    }
    if(playerSelection=='scissors' && compSelection=='rock'){
               compWin();
    }
    else if(playerSelection=='scissors' && compSelection=='paper'){
        playerWin();
    }
    else if(playerSelection=='scissors' && compSelection=='scissors'){
        tieAmount();
    }
    if(playerScore ==5){
        alert('Congrats you won and outsmarted the computer!');
        reset();
    }
    else if(compScore==5){
        alert('Awh man, you lost.... Better luck next time')
    }
}
    


// to reset the game method

reset =()=>{
    playerScore.innerHTML = 'Your score is: 0'
    compScore.innerHTML = 'Computer Score is: 0'
    tieAmount.innerHTML= 'Tie rounds:0'
}







 



