// Check if players data exists in localStorage
const playersData = JSON.parse(localStorage.getItem('players')) || [];

const playerForm = document.getElementById('playerForm');
const playerTable = document.getElementById('playerTable').getElementsByTagName('tbody')[0];

// Display players on the page
function displayPlayers(players) {
    playerTable.innerHTML = ''; // Clear the table

    players.forEach(player => {
        const row = playerTable.insertRow();

        const nameCell = row.insertCell(0);
        const scoreCell = row.insertCell(1);
        const levelCell = row.insertCell(2);

        nameCell.textContent = player.name;
        scoreCell.textContent = player.score;
        levelCell.textContent = player.level;
    });
}

// Add new player to the list
playerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('playerName').value;
    const score = parseInt(document.getElementById('playerScore').value);
    const level = parseInt(document.getElementById('playerLevel').value);

    if (playersData.length < 10) {
        playersData.push({ name, score, level });
        localStorage.setItem('players', JSON.stringify(playersData));
        displayPlayers(playersData);
    } else {
        alert('You can only add up to 10 players.');
    }

    playerForm.reset();
});

// Sort players by name
function sortPlayers(criteria) {
    playersData.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    localStorage.setItem('players', JSON.stringify(playersData));
    displayPlayers(playersData);
}

// Sort players by score
function sortScore(criteria) {
    playersData.sort((a, b) => b[criteria] - a[criteria]);
    localStorage.setItem('players', JSON.stringify(playersData));
    displayPlayers(playersData);
}

// Sort players by level
function sortLabel(criteria) {
    playersData.sort((a, b) => b[criteria] - a[criteria]);  // Use simple numeric comparison
    localStorage.setItem('players', JSON.stringify(playersData));
    displayPlayers(playersData);
}

// Display players when the page loads
window.onload = () => {
    displayPlayers(playersData);
};
