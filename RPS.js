const choices = ["rock", "paper", "scissors"];
let playerInput = "";

const getPlayerInput = () => {
  playerInput = prompt("Rock, Paper, or Scissors?").toLowerCase();
  if (!choices.includes(playerInput)) return getPlayerInput();
  return playerInput;
};

const determineWinner = (p1, p2) => {
  if (p1 === p2) return "It was a tie!";
  else if (Math.abs(p1 - p2) < 2) return p2 > p1 ? "CPU wins!" : "Player wins!";
  else return p2 > p1 ? "Player wins!" : "CPU wins!";
};

let player = choices.findIndex((index) => index === getPlayerInput());
let cpu = Math.floor(Math.random() * 3);
let winner = determineWinner(player, cpu);

document.getElementById(
  "h1"
).innerHTML = `Player chose ${choices[player]}, and CPU chose ${choices[cpu]}. ${winner}`;
