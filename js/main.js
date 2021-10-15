document.addEventListener('DOMContentLoaded', function () {
    let score;

    document.body.onclick = function (event) {
        score = document.getElementById('score');
        score.textContent = Number(score.textContent) + 1;

        console.log(score);
    };
});

//우클릭 방지 이벤트
document.addEventListener('contextmenu', function (event) {
    return event.preventDefault();
});