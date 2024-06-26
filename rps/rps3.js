// Define hands array
const hands = ['rock', 'paper', 'scissors'];

// Define function that returns hands
function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

// Two player objects
const player1 = {
    name: 'Brittany',
    getHand: getHand,
    score: 0
};
const player2 = {
    name: 'Chelsea',
    getHand: getHand,
    score: 0
};

//update the log area
function logMessage(message) {
    const log = document.getElementById('gameLog');
    log.innerHTML += message + '<br>';
    log.scrollTop = log.scrollHeight;
}

// Define playRound function
function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    console.log(`${player1.name} plays ${hand1}`);
    console.log(`${player2.name} plays ${hand2}`);

    if (hand1 === hand2) {
        console.log("it's a tie!");
        return null;
    } else if (
        (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'scissors' && hand2 === 'paper') ||
        (hand1 === 'paper' && hand2 === 'rock')
    ) {
        console.log(`${player1.name} wins!`);
        return player1;
    } else {
        console.log(`${player2.name} wins!`);
        return player2;
    }
}

console.log(playRound(player1, player2));

// Function to update scores and winner display
function updateScores(player1, player2, winner) {
    document.getElementById('score1').textContent = player1.score;
    document.getElementById('score2').textContent = player2.score;

    if (winner) {
        document.getElementById('winnerName').textContent = winner.name;
    } else {
        document.getElementById('winnerName').textContent = "It's a tie!";
    }
}
console.log(updateScores(player1, player2, null));


// Event listener for play button
/*document.getElementById('playButton').addEventListener('click', () => {
    playGame(player1, player2, 3);
});*/