// Function => Computer choice
const getComputerChoice = (choice = ["pedra", "papel", "tesoura"]) => {
  return choice[Math.floor(Math.random(0, 2) * choice.length)];
};

// Function => Start Game
function startGame() {
  let playerScore = 0
  let computerScore = 0

  for (let i = 0; i <= 5; i++) {
    let computerChoice = getComputerChoice();
    let playerChoice = String(
      prompt("Pedra, papel ou tesoura ?")
    ).toLowerCase();

    if (playerChoice === null || playerChoice === undefined) {
      alert("Error, insira um dado válido !");
    } else if (playerChoice === computerChoice) {;
      alert("Empate !!");
      --i;
    } else if (
      (playerChoice === "pedra" && computerChoice === "tesoura",
      playerChoice === "papel" && computerChoice === "pedra",
      playerChoice === "tesoura" && computerChoice === "papel")
    ) {
      playerScore++
      document.getElementById('player').innerHTML = playerScore
    } else {
      computerScore++
      document.getElementById('computer').innerHTML = computerScore
    }
  }

  return console.log(
    `Player Score: ${playerScore} \n Computer Score: ${computerScore}`
  );
}

const buttonStartGame = document.getElementById("btn-start");
buttonStartGame.addEventListener("click", () => startGame());
