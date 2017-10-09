// Rock Paper Scissors simulator
// Rock, Paper, and Scissors variables
var rock = 1;
var scissors = 2;
var paper = 3;
// player result divs
var player1Display = document.getElementById('player1Display');
var player2Display = document.getElementById('player2Display');
// result div
var result = document.getElementById('result');
// create button and add event listener 
var button = document.getElementById('button');
button.addEventListener('click', shoot);
// function to display choices
function Gametime (player1Choice, player2Choice, choiceIcon1, choiceIcon2) {
    player1Display.innerHTML = `<h3>Player 1 chose ${player1Choice}!</h3>
                                <br>
                                <i class="fa fa-hand-${choiceIcon1}-o fa-5x"></i>`;
    player2Display.innerHTML = `<h3>Player 2 chose ${player2Choice}!</h3>
                                <br>
                                <i class="fa fa-hand-${choiceIcon2}-o fa-5x"></i>`;
}
// function to play out match
function shoot () {
    // simulate player choices
    var player1 = Math.floor(Math.random() * 3) + 1;
    var player2 = Math.floor(Math.random() * 3) + 1;
    // conditional statements
    if(player1 === rock && player2 === scissors) {
        Gametime("rock", "scissors", "rock", "scissors");
        result.innerHTML = `<h2>Player 1 wins!</h2>`;
    } else if(player1 === scissors && player2 === rock) {
        Gametime("scissors", "rock", "scissors", "rock");
        result.innerHTML = `<h2>Player 2 wins!</h2>`;
    } else if(player1 === paper && player2 === rock) {
        Gametime("paper", "rock", "paper", "rock");
        result.innerHTML = `<h2>Player 1 wins!</h2>`;
    } else if(player1 === rock && player2 === paper) {
        Gametime("rock", "paper", "rock", "paper");
        result.innerHTML = `<h2>Player 2 wins!</h2>`;
    } else if(player1 === scissors && player2 === paper) {
        Gametime("scissors", "paper", "scissors", "paper");
        result.innerHTML = `<h2>Player 1 wins!</h2>`;
    } else if(player1 === paper && player2 === scissors) {
        Gametime("paper", "scissors", "paper", "scissors");
        result.innerHTML = `<h2>Player 2 wins!</h2>`;
    } else if(player1 === player2) {
        player1Display.innerHTML = "";
        player2Display.innerHTML = "";
        result.innerHTML = `<h2>Tie game! Try again!</h2>`;
    }
}