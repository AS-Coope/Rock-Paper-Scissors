// init variables
let gameChoices = ["rock", "paper", "scissors"];
let playGameResult = "";

function getComputerChoice(){

  return gameChoices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice(){

  playerInputChoice = prompt("What is your choice?");
  if (playerInputChoice === null || playerInputChoice === ''){
    console.log("No input was provided! Please choose 'Rock', 'Paper' or 'Scissors'.");
    getPlayerChoice();
  }
  return playerInputChoice.toLocaleLowerCase();
}

function playGame(playerChoice, computerChoice){

  /* the strings of the computer's choice and the player input need 
   to be of the same case, or it won't properly check that they are the same, or not */
  let isPlayerChoiceValid = gameChoices.includes(playerChoice) ? true : false;

  if (isPlayerChoiceValid === false ){
    console.log("You did not pick a suitable option. Please try again!");
    return playGame(getPlayerChoice(), computerChoice);
  }

  playGameResult = checkGameResult(playerChoice, computerChoice);
  if (playGameResult === "Draw! Replay"){
    console.log("Draw! Replay");
    return playGame(getPlayerChoice(), getComputerChoice());
  } else {
    return playGameResult;
  }

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
    //console.log(playerChoice, computerChoice);
    return "Draw! Replay";
  }
}

function game(){
  let finalGameResult = "";
  for (let iterator = 0; iterator < 5; iterator++){
    finalGameResult = playGame(getPlayerChoice(), getComputerChoice());
    console.log(finalGameResult);
  }
}
game();
//console.log(playGame(getPlayerChoice(), getComputerChoice()));