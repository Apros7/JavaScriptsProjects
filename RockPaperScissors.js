console.log('Hi. Welcome to rock, paper, scissors in JavaScript.');
const getUserInput = userInput => {
  userInput = userInput.toLowerCase()
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
    return userInput
  } else {
    console.log("You need to type either rock, paper or scissors")
  }
};

const getComputerInput = () => {
  const number = Math.floor(Math.random() * 3)
  if (number === 1) {
    return "rock"
  } else if (number === 2) {
    return "paper"
  } else {
    return "scissors"
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "You chose bomb. You won!"
  }
  if (userChoice === computerChoice) {
    return "The game was a tie"
  } else if (userChoice === "rock"){
    if (computerChoice === "paper") {
      return "The computer won"
    }
  } if (userChoice === "paper"){
    if (computerChoice === "scissors") {
      return "The computer won"
    }
  } if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won"
    }
  } 
  return "You won!"
}

const playGame = () => {
  const userChoice = getUserInput(userInput);
  const computerChoice = getComputerInput();
  console.log(`You threw: ${userChoice}`)
  console.log(`The computer thew: ${computerChoice}`)
  console.log(`The winner is: ${determineWinner(userChoice, computerChoice)}`)
}

const userInput = "bomb"
playGame()
