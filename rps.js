

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
// for output
const output = document.querySelector('.text');
output.textContent="May the Best Win"

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
        output.textContent = `You lost! You chose ${playerSelection} and The computer chose ${compSelection}`;
    compWin();
    
    }
    else if(playerSelection=='rock' && compSelection=='rock'){
        output.textContent = `Its a tie! You chose ${playerSelection} and The computer chose ${compSelection}`;
        tieAmount();
       

    }
    else if(playerSelection=='rock'&& compSelection=='scissors'){
        output.textContent = `You won! You chose ${playerSelection} and The computer chose ${compSelection}`;
           playerWin();
          
    }

    if(playerSelection=='paper' && compSelection=='rock'){
        output.textContent = `You won! You chose ${playerSelection} and The computer chose ${compSelection}`;
       playerWin();
    
    }
    else if(playerSelection== 'paper' && compSelection=='paper'){
        output.textContent = `Its a tie! You chose ${playerSelection} and The computer chose ${compSelection}`;
        tieAmount();
        

    }
    else if(playerSelection=='paper' && compSelection=='scissors'){
        output.textContent = `You lost! You chose ${playerSelection} and The computer chose ${compSelection}`;
                    compWin();
                   
    }
    if(playerSelection=='scissors' && compSelection=='rock'){
        output.textContent = `You lost! You chose ${playerSelection} and The computer chose ${compSelection}`;
               compWin();
             
    }
    else if(playerSelection=='scissors' && compSelection=='paper'){
        output.textContent = `You won! You chose ${playerSelection} and The computer chose ${compSelection}`;
        playerWin();
 
    }
    else if(playerSelection=='scissors' && compSelection=='scissors'){
        output.textContent = `Its a tie! You chose ${playerSelection} and The computer chose ${compSelection}`;
        tieAmount();
       

    }
    if(playerScore ==5){
       output.textContent =(`Congrats you won and outsmarted the computer! `);
        // alert('Congrats you won and outsmarted the computer!');
       
    }
    else if(compScore==5){
       
        output.textContent = 'Awh man, you lost.... Better luck next time'

       
    }
}
    


// to reset the game method

 const reset = function(){
    playerScore=0;
    compScore=0;
    tie=0;
    document.querySelector('#player-score').innerText= "Your score is currently: " +playerScore;
    document.querySelector('#computer-score').innerText= "Computer Score is currently: " +compScore;
    output.textContent = 'May the Best Win';
    document.querySelector('#ties').innerText= 'Amount of ties: ' +tie;
   

   
}
//type error here 
const resetGame= document.querySelector('.res');
 resetGame.addEventListener('click', function(){
    reset();
 })








 



