let paper = "paper";
let rock = "rock";
let scissors = "scissors";


function getComputerChoice() {
    
    function randomGenerator() {
        let a = (Math.random() * 10);
        let b = Math.floor(a)
        return b;
    }

    let a = randomGenerator();
    let b;
    if (a <= 3) {
        b = paper;
    } else if (a <= 7 && a > 3) {
        b = rock;
    } else {
        b = scissors
    }
    return b;
}





function playRound (a) {
 let comp = getComputerChoice();
 let human = a
 let result;


 

 if (human == "paper" && comp == scissors) {
    result = "You lost! Scissors beats Paper";
 } else if (human == "paper" && comp == rock) {
    result = "You won! Paper beats Rock"
 } else if (human == "paper" && comp == paper) {
    result = "You tied with Paper! Go again!"
 }  else if (human == "rock" && comp == paper) {
    result = "You lost! Paper beats Rock"
 } else if (human == "rock" && comp == scissors) {
    result = "You won! Rock beats Scissors"
 } else if (human == "rock" && comp == rock) {
    result = "You tied with Rock! Go again!"
 } else if (human == "scissors" && comp == rock) {
    result = "You lost! Rock beats Scissors"
 } else if (human == "scissors" && comp == paper) {
    result = "You won! Scissors beats Paper"
 } else { result = "You tied with Scissors! Go again!"}
 
 const p = document.querySelector(".result")
 p.textContent = result;
  
 return result;
}


function game(a) {

   let value = playRound(a)
 
  
  if (value === "You lost! Scissors beats Paper" || value === "You lost! Paper beats Rock" || value === "You lost! Rock beats Scissors") {
    lose++
  } else if (value === "You won! Paper beats Rock" || value === "You won! Rock beats Scissors" || value === "You won! Scissors beats Paper") {
    win++
  } else {
    tie++
  }

 
  const WIN = document.querySelector(".win") 
  const TIE = document.querySelector(".tie")  
  const LOSE= document.querySelector(".lose")
 
  WIN.textContent = win
  LOSE.textContent = lose
  TIE.textContent = tie;


const p = document.querySelector(".final-result")
p.textContent = decider;

  if (win == 5) {
   decider = "You won! Thanks for playing!";
} else if (lose == 5) {
   decider = "You lost! Better luck nex time!";
} else {}

}
   let decider;
   let win = 0
   let lose = 0
   let tie = 0 
   const rockPick = document.querySelector(".rock")
   const paperPick = document.querySelector(".paper")
   const scissorsPick = document.querySelector(".scissors")

   rockPick.addEventListener("click", () => { game("rock")})
   paperPick.addEventListener("click", () => { game("paper")})
   scissorsPick.addEventListener("click", () => { game("scissors")})
   
   









