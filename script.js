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



function playerSelection() {
    let a = prompt("Choose either rock, paper or scissors")
    let b = a.toLowerCase()
    if (b = "rock") {
        return rock;
    } else if (b = "paper") {
        return paper;
    } else {
        return scissors;
    }
    
    
}

function playRound () {
 let comp = getComputerChoice();
 let human = playerSelection();
 let result;

 if (human == paper && comp == scissors) {
    result = "You lost! Scissors beats Paper";
 } else if (human == paper && comp == rock) {
    result = "You won! Paper beats Rock"
 } else if (human == paper && comp == paper) {
    result = "You tied with Paper! Go again!"
 }  else if (human == rock && comp == paper) {
    result = "You lost! Paper beats Rock"
 } else if (human == rock && comp == scissors) {
    result = "You won! Rock beats Scissors"
 } else if (human == rock && comp == rock) {
    result = "You tied with Rock! Go again!"
 } else if (human == scissors && comp == rock) {
    result = "You lost! Rock beats Scissors"
 } else if (human == scissors && comp == paper) {
    result = "You won! Scissors beats Paper"
 } else { result = "You tied with Scissors! Go again!"}
  
 return result;
}


function game() {

let decider;
let result;
let win = 0
let lose = 0
let tie = 0 
    
    


 console.log(playRound())
 if (result == "You lost! Scissors beats Paper" || "You lost! Paper beats Rock" || "You lost! Rock beats Scissors") {
    win++
  } else if (result == "You won! Paper beats Rock" || "You won! Rock beats Scissors" || "You won! Scissors beats Paper") {
    lose++
  } else {
    tie++
  }
 console.log(playRound())
 if (result == "You lost! Scissors beats Paper" || "You lost! Paper beats Rock" || "You lost! Rock beats Scissors") {
    win++
  } else if (result == "You won! Paper beats Rock" || "You won! Rock beats Scissors" || "You won! Scissors beats Paper") {
    lose++
  } else {
    tie++
  }
 console.log(playRound())
 if (result == "You lost! Scissors beats Paper" || "You lost! Paper beats Rock" || "You lost! Rock beats Scissors") {
    win++
  } else if (result == "You won! Paper beats Rock" || "You won! Rock beats Scissors" || "You won! Scissors beats Paper") {
    lose++
  } else {
    tie++
  }
 console.log(playRound())
 if (result == "You lost! Scissors beats Paper" || "You lost! Paper beats Rock" || "You lost! Rock beats Scissors") {
    win++
  } else if (result == "You won! Paper beats Rock" || "You won! Rock beats Scissors" || "You won! Scissors beats Paper") {
    lose++
  } else {
    tie++
  }
 console.log(playRound())
 if (result == "You lost! Scissors beats Paper" || "You lost! Paper beats Rock" || "You lost! Rock beats Scissors") {
    win++
  } else if (result == "You won! Paper beats Rock" || "You won! Rock beats Scissors" || "You won! Scissors beats Paper") {
    lose++
  } else {
    tie++
  }


 if (win >= 3) {
    decider = "You won! Thanks for playing!"
 } else if (lose >= 3) {
    decider = "You lost! Better luck nex time!"
 } else {
    decider = "Its a tie!!"
 }
 return decider;

}


console.log (game())





