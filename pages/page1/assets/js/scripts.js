// Retrieve players from local storage or use default players
let players = JSON.parse(localStorage.getItem('players')) || [
    { name: 'Sam', score: 90, level: 8 },
    { name: 'Jolo', score: 85, level: 7 },
    { name: 'Chloe', score: 95, level: 10 },
    { name: 'Kent', score: 80, level: 6 },
    { name: 'Joshua', score: 88, level: 8 },
    { name: 'Bryan', score: 76, level: 5 },
    { name: 'Myles', score: 92, level: 9 },
    { name: 'Daph', score: 77, level: 4 },
    { name: 'Gwen', score: 90, level: 7 },
    { name: 'Kit', score: 100, level: 10 }
];

// Function to display players in the table
function displayPlayers() {
    const tableBody = document.querySelector("#playerTable tbody");
    tableBody.innerHTML = ''; // Clear the existing table rows

    players.forEach(player => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${player.name}</td>
            <td>${player.score}</td>
            <td>${player.level}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Sort players by name
function sortPlayers() {
    players.sort((a, b) => a.name.localeCompare(b.name));
    displayPlayers();
    savePlayers(); // Save after sorting
}

// Sort players by score
function sortScore() {
    players.sort((a, b) => b.score - a.score);
    displayPlayers();
    savePlayers(); // Save after sorting
}

// Sort players by level
function sortLabel() {
    players.sort((a, b) => b.level - a.level);
    displayPlayers();
    savePlayers(); // Save after sorting
}

// Save the player data to local storage in JSON format
function savePlayers() {
    localStorage.setItem('players', JSON.stringify(players));
}

// Initial display of players
displayPlayers();

// Add event listener for form submission to add new player
document.getElementById("playerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("playerName").value.trim();
    const score = parseInt(document.getElementById("playerScore").value);
    const level = parseInt(document.getElementById("playerLevel").value);

    if (name && !isNaN(score) && !isNaN(level)) {
        // Add the new player to the array
        players.push({ name, score, level });

        // Display updated players list
        displayPlayers();

        // Save the updated players list to local storage
        savePlayers();

        // Reset form fields
        event.target.reset();
    } else {
        alert("Please enter valid values for name, score, and level.");
    }
});
