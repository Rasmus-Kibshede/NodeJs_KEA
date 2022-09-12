
let score = 100;

let playerOne;
let playerTwo;


export function initializePlayers(playerOneIn, playerTwoIn) {
    playerOne = playerOneIn;
    playerTwo = playerTwoIn;
}


export function initializeScore(scoreInitilized = 101) {
    score = scoreInitilized;
}

export function initializeGame() {
    console.log(playerOne, playerTwo);
    console.log("Game starts with score...", score);
}

