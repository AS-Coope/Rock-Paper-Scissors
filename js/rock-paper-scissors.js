// init variables
let gameChoices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
  return gameChoices[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());