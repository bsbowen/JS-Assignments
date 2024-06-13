
//define hands array
const hands = ['rock', 'paper', 'scissors'];

//define function that returns hands
function getHand() {
    return hands[parseInt(Math.random()* 10) % 3];
}

//two player objects
const player1 = {
    name: 'Brittany',
    getHand: getHand
};
const player2 = {
    name: 'Chelsea',
    getHand: getHand
};

//define playround function
function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    console.log(`${player1.name} plays ${hand1}`);
    console.log(`${player2.name} plays ${hand2}`);

    if (hand1 === hand2) {
        console.log("it's a tie!");
        return null;

    } else if (

        (hand1=== 'rock' && hand2 === 'scissors') ||
        (hand1=== 'scissors' && hand2 === 'paper') ||
        (hand1=== 'paper' && hand2 === 'rock')
    ) {

        console.log(`${player1.name} wins!`);
        return player1;

    } else {

        console.log(`${player2.name} wins!`);
        return player2;
    }
    
 }

 const winner = playRound(player1, player2);

