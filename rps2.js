// define hands array
const hands = ['rock', 'paper', 'scissors'];

// define function that returns hands
function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

// two player objects
const player1 = {
    name: 'Brittany',
    getHand: getHand
};
const player2 = {
    name: 'Chelsea',
    getHand: getHand
};

// define playround function
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

//  playgame function
function playGame(player1, player2, playUntil) {
    let score1 = 0;
    let score2 = 0;

    while (score1 < playUntil && score2 < playUntil) {
        const winner = playRound(player1, player2);
        if (winner === player1) {
            score1++;
        } else if (winner === player2) {
            score2++;
        }
        console.log(`${player1.name}: ${score1}, ${player2.name}: ${score2}`);
    }

    if (score1 === playUntil) {
        console.log(`${player1.name} wins the game!`);
        return player1;
    } else {
        console.log(`${player2.name} wins the game!`);
        return player2;
    }
}

// define playtournament function
function playTournament(player1, player2, player3, player4, playUntil) {
    const winner1 = playGame(player1, player2, playUntil);
    const winner2 = playGame(player3, player4, playUntil);

    const tournamentWinner = playGame(winner1, winner2, playUntil);

    console.log(`${tournamentWinner.name} is the world champion!`);
}


const player3 = {
    name: 'Chloe',
    getHand: getHand
};
const player4 = {
    name: 'Christina',
    getHand: getHand
};

//play game 
console.log("Starting a game between Brittany and Chelsea to 3 wins:");
playGame(player1, player2, 3);

//play tournament
console.log("Starting a tournament:");
playTournament(player1, player2, player3, player4, 3);