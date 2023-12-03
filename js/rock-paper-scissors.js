// init variables
let gameChoices = ["rock", "paper", "scissors"];

function getComputerChoice(){

  return gameChoices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice(){

  playerChoiceLowerCase = prompt("What is your choice?").toLocaleLowerCase();
  return playerChoiceLowerCase;
}

function playGame(playerChoice, computerChoice){

  /* the strings of the computer's choice and the player input need 
   to be of the same case, or it won't properly check that they are the same, or not */
  isPlayerChoiceValid = gameChoices.includes(getPlayerChoice()) ? true : false;

  if (isPlayerChoiceValid === false){
    console.log("You did not pick a suitable option. Please try again!");
    return getPlayerChoice();
  }
  return checkGameResult(isPlayerChoiceValid, playerChoice, computerChoice);
}

function checkGameResult(playerChoice, computerChoice){
  
  if (playerChoice === gameChoices[0] && computerChoice === gameChoices[1]){
    return "You Lose! Paper beats Rock";
  } else if(playerChoice === gameChoices[1] && computerChoice === gameChoices[0]){
    return "You Win! Paper beats Rock";
  } else if (playerChoice === gameChoices[0] && computerChoice === gameChoices[2]){
    return "You Win! Rock beats Scissors";
  } else if (playerChoice === gameChoices[2] && computerChoice === gameChoices[0]){
    return "You Lose! Rock beats Scissors";
  } else if (playerChoice === gameChoices[1] && computerChoice === gameChoices[2]){
    return "You Lose! Scissors beats Paper";
  } else if (playerChoice === gameChoices[2] && computerChoice === gameChoices[1]){
    return "You Win! Scissors beats Paper";
  } else {
    return "Draw! Replay";
  }
}
console.log(playGame(getPlayerChoice(), getComputerChoice()));