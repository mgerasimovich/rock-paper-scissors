function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = Math.floor(Math.random()*choices.length);
    return computerChoice;
    console.log(computerChoice);
}

function playRound(playerSelection, computerSelection) {
    let outcome = "oops...";
    if (playerSelection == "rock" && computerSelection == 0) {outcome = "Woah! It's a tie.";}
        else if (playerSelection == "paper" && computerSelection == 1) {outcome = "Woah! It's a tie.";}
        else if (playerSelection == "scissors" && computerSelection == 2) {outcome = "Woah! It's a tie.";}
        else if (playerSelection == "rock" && computerSelection == 1) {outcome = "Better luck next time.";}
        else if (playerSelection == "paper" && computerSelection == 2) {outcome = "Better luck next time.";}
        else if (playerSelection == "scissors" && computerSelection == 0) {outcome = "Better luck next time.";}
        else if (playerSelection == "rock" && computerSelection == 1) {outcome = "You win!";}
        else if (playerSelection == "paper" && computerSelection == 2) {outcome = "You win!";}
        else if (playerSelection == "scissors" && computerSelection == 0) {outcome = "You win!";}
        else {outcome = "Hmm... something has gone horribly wrong.";}
    return console.log(outcome);
}

function game() {
    playRound(playerSelection, computerSelection);
}

const playerChocie = prompt('rock, paper, or scissors?');
const playerSelection = playerChocie.toLocaleLowerCase();
const computerSelection = computerPlay();

game();
game();
game();
game();
game();