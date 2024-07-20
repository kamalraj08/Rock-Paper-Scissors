
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
    const winnerPlayAgainButton = document.getElementById('winner-play-again');

    winnerPlayAgainButton.addEventListener('click', () => {
        localStorage.setItem('playerScore', '0');
        localStorage.setItem('computerScore', '0');
        window.location.href = 'index.html';
    });
});

