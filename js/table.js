
    let leaderboardData = [
        { rank: 1, player: 'AceKillerX', points: 1200, status: 'status-1' },
        { rank: 2, player: 'ShadowHunter', points: 1150, status: 'status-2' },
        { rank: 3, player: 'DragonSlayer99', points: 1100, status: 'status-3' },
        { rank: 4, player: 'StormBreaker', points: 1000, status: 'status-others' },
        { rank: 5, player: 'NightWolfZ', points: 950, status: 'status-others' },
        { rank: 6, player: 'ThunderFury', points: 920, status: 'status-others' },
    ];

    const leaderboardTable = document.getElementById('leaderboard');

    function updateLeaderboard() {
        leaderboardTable.innerHTML = ''; 

        leaderboardData.forEach(player => {
            const row = document.createElement('tr');
            row.classList.add(player.status);

            row.innerHTML = `
                <td>${player.rank}</td>
                <td>${player.player}</td>
                <td>${player.points}</td>
                <td><span class="${player.status}">${getStatusText(player.status)}</span></td>
            `;

            leaderboardTable.appendChild(row);
        });
    }

    function getStatusText(status) {
        switch (status) {
            case 'status-1': return 'Champion';
            case 'status-2': return 'Runner-Up';
            case 'status-3': return 'Third Place';
            default: return 'Active';
        }
    }

    function changePlayerData() {
        const randomIndex = Math.floor(Math.random() * leaderboardData.length);
        const randomPlayer = leaderboardData[randomIndex];

        randomPlayer.points += Math.floor(Math.random() * 100) + 1;
        randomPlayer.status = randomPlayer.status === 'status-1' ? 'status-2' : randomPlayer.status === 'status-2' ? 'status-3' : 'status-1'; // Rotate through statuses

        leaderboardData.sort((a, b) => b.points - a.points);

        updateLeaderboard();
    }

    updateLeaderboard();

    setInterval(changePlayerData, 5000);


