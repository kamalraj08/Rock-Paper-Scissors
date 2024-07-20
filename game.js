function showContent() {
    document.getElementById('content').style.display = 'block';
    document.getElementById('showButton').style.display = 'none';
    document.getElementById('hideButton').style.display = 'inline-block';
}

function hideContent() {
    document.getElementById('content').style.display = 'none';
    document.getElementById('showButton').style.display = 'inline-block';
    document.getElementById('hideButton').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    let playerScore = localStorage.getItem('playerScore') ? parseInt(localStorage.getItem('playerScore')) : 0;
    let computerScore = localStorage.getItem('computerScore') ? parseInt(localStorage.getItem('computerScore')) : 0;

    const choiceButtons = document.querySelectorAll('.choice-btn');
    const playerScoreElement = document.getElementById('player-score');
    const computerScoreElement = document.getElementById('computer-score');
    const playerPickElement = document.getElementById('player-pick');
    const computerPickElement = document.getElementById('computer-pick');
    const resultMessageElement = document.querySelector('.results-text');
    const playAgainButton = document.querySelector('.play-again');
    const nextButton = document.getElementById('nextButton');
    const gameSection = document.querySelector('.game');
    const resultsSection = document.querySelector('.results');

    
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;

    gameSection.classList.remove('hidden');
    resultsSection.classList.add('hidden');
    nextButton.classList.add('hidden');

    choiceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = button.getAttribute('data-choice');
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            determineWinner(playerChoice, computerChoice);
        });
    });

    function determineWinner(playerChoice, computerChoice) {
        let result = '';

        if (playerChoice === computerChoice) {
            result = 'TIE UP';
            nextButton.classList.add('hidden');
        } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')) {
            result = 'YOU WIN AGAINST PC';
            playerScore++;
            localStorage.setItem('playerScore', playerScore);
            playerScoreElement.textContent = playerScore;
            nextButton.classList.remove('hidden');
        } else {
            result = 'YOU LOST AGAINST PC';
            computerScore++;
            localStorage.setItem('computerScore', computerScore);
            computerScoreElement.textContent = computerScore;
            nextButton.classList.add('hidden');
        }

        displayResults(playerChoice, computerChoice, result);
    }

    function displayResults(playerChoice, computerChoice, result) {
        gameSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');

        playerPickElement.innerHTML = `
            <div class="choice ${playerChoice}">
                <img src="${playerChoice}.png" alt="${playerChoice}">
            </div>
        `;
        computerPickElement.innerHTML = `
            <div class="choice ${computerChoice}">
                <img src="${computerChoice}.png" alt="${computerChoice}">
            </div>
        `;
        resultMessageElement.textContent = result;
        playAgainButton.parentElement.classList.remove('hidden'); 
    }

    playAgainButton.addEventListener('click', playAgain);


    function playAgain() { 
        playerPickElement.innerHTML = '';
        computerPickElement.innerHTML = '';
        resultMessageElement.textContent = '';
        resultsSection.classList.add('hidden');
        playAgainButton.parentElement.classList.add('hidden'); 
        gameSection.classList.remove('hidden');
        nextButton.classList.add('hidden');
        
    }

    nextButton.addEventListener('click', function() {
        window.location.href = 'winner.html';
    });
});
