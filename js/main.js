document.addEventListener('DOMContentLoaded', function () {
    let score;

    document.body.onclick = function (event) {
        score = document.getElementById('score_view');
        score.textContent = Number(score.textContent) + 1;

        console.log(score);
    };
});