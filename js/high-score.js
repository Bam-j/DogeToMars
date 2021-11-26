const mariaDBConn = require('./db-connect.js');

document.addEventListener('DOMContentLoaded', function () {
    mariaDBConn.getScoreList()
        .then(rows => {
            let scoreArr = rows.trim().split('');

            for (let i = 0; i < scoreArr.length; i++) {
                scoreArr[i] = parseInt(scoreArr[i]);
            }

            const highScore = Math.max(...scoreArr);
            const highScoreView = document.getElementById('high_score');

            highScoreView.textContent = highScore.toString().trim();
        })
        .catch(e => {
            return console.error(e);
        });
}, false);
