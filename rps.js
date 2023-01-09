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
 const playerAmount = document.querySelector('#player-score')
 const compAmount = document.querySelector('#computer-score');
const ties = document.querySelector('#ties');
let playerScore =0;
let compScore=0;
let tie =0;

console.log(rock);
console.log(scissors);
console.log(paper);
// Gets the computers choice

const  rps  = ["rock", "paper", "scissors"];
function getComputerChoice(){
      const choice = rps[Math.floor(Math.random()*rps.length)]
      return choice;   
      }


//Win method

playerWin =()=>{
 ++ playerScore;
 playerAmount.innerText = "Your score is currently: " + playerScore;
 
}


compWin = ()=>{
    
   ++compScore;
   compAmount.innerText = "Computer Score is currently: " + compScore;
}

tieAmount = ()=>{
    ++tie;
  ties.innerText = 'Amount of ties: ' +tie;

 
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
        reset();
    }
}
    


// to reset the game method

reset =()=>{
    playerScore.innerText = 'Your score is: ' + playerScore
    compScore.innerText = 'Computer Score is currently: ' +compScore
    tieAmount.innerText = 'Tie Score is: ' +tieAmount;
}







 



