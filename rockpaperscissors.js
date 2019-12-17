//Rock Paper Scissors Game
"use strict";

let playerScore = 0, computerScore = 0;

const hands = Array.from(document.querySelectorAll('.player'))
hands.forEach(hand => {
    hand.addEventListener('click', (e) => {
        playRound(e.target.id, computerPlay())
    });
});

const resetbutton = document.querySelector('#reset')
resetbutton.addEventListener('click', reset)

// Generate random hand for computer
function computerPlay() {
    // Generate random number to represent hand
    let number = Math.floor(Math.random() * Math.floor(3));
    
    // Generate computer selection based on the number
    let computerSelection = (number === 0) ? "Rock" : 
        (number === 1) ? "Paper": "Scissors";
    
    return computerSelection;
}

// Plays a round of rock paper scissors game
function playRound(playerSelection, computerSelection) {
    // Store selection in lower case
    let playerHand = playerSelection.toLowerCase();
    let computerHand = computerSelection.toLowerCase();
    
    let result = '';
    // Decide the result of the game
    if ((playerHand === "rock" && computerHand === "scissors")
        || (playerHand === "paper" && computerHand === "rock")
        || (playerHand === "scissors" && computerHand === "paper")) {
        result = `You win! ${playerSelection} beat ${computerSelection}`;
        playerScore += 1;
    } else if (playerHand === computerHand) {
        result = "It's a draw!";
    } else {
        result = `You lose! ${computerSelection} beat ${playerSelection}`
        computerScore += 1;
    }

    display(result);

    check();
}

// Run a five round game of rock paper scissors with a winner in the end
function check() {
    if (playerScore === 5 || computerScore === 5) {
        let victor = '';
        if (playerScore > computerScore) {
            victor = 'Congratulations! You won best out of five!'
        } else if (playerScore < computerScore) {
            victor = 'Too bad! The computer beat you!'
        } else {
            victor = "Looks like you're an even match!"
        }

        const victorBox = document.querySelector('.victor')
        
        victorBox.innerHTML = `<p>${victor}</p>`
    }
}

// Displays result and score for every round
function display(result) {
    const resultBox = document.querySelector('.result');
    const scoreBox = document.querySelector('.score');

    resultBox.innerHTML = `<p>${result}</p>`

    scoreBox.innerHTML = `<p>Your Score = ${playerScore}, Computer Score = ${computerScore}</p>`
}

function reset() {
    const resultBox = document.querySelector('.result');
    const scoreBox = document.querySelector('.score');
    const victor = document.querySelector('.victor');

    playerScore = 0
    computerScore = 0

    resultBox.innerHTML = '<p>First to Five Wins!</p>'
    scoreBox.innerHTML = `<p>Your Score = ${playerScore}, Computer Score = ${computerScore}</p>`
    victor.innerHTML = '<p>Winner</p>'
}