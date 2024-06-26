const hands = ['rock', 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

const player1 = {
    name: 'Brittany',
    getHand: getHand
};
const player2 = {
    name: 'Chelsea',
    getHand: getHand
};

let score1 = 0;
let score2 = 0;

function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    console.log(`${player1.name} plays ${hand1}`);
    console.log(`${player2.name} plays ${hand2}`);

    document.getElementById('player1-hand').textContent = `Hand: ${hand1}`;
    document.getElementById('player2-hand').textContent = `Hand: ${hand2}`;

    let winner = null;
    if (hand1 === hand2) {
        document.getElementById('narrator').textContent = `Both players chose ${hand1}. It's a tie!`;

    } else if (
        (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'scissors' && hand2 === 'paper') ||
        (hand1 === 'paper' && hand2 === 'rock')
    ) {
        document.getElementById('narrator').textContent = `${player1.name} wins this round with ${hand1} against ${hand2}!`;
        score1++;
        winner = player1;
    } else {
        document.getElementById('narrator').textContent = `${player2.name} wins this round with ${hand2} against ${hand1}!`;
        score2++;
        winner = player2;
    }

    updateScores();
    return winner;
}

function updateScores() {
    document.getElementById('player1-score').textContent = `Player 1: ${score1}`;
    document.getElementById('player2-score').textContent = `Player 2: ${score2}`;
}

function resetGame() {
    score1 = 0;
    score2 = 0;
    document.getElementById('player1-hand').textContent = 'Hand: ';
    document.getElementById('player2-hand').textContent = 'Hand: ';
    updateScores();
    document.getElementById('narrator').textContent = '';
    document.getElementById('winner-announcement').textContent = '';
}
