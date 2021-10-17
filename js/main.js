document.addEventListener('DOMContentLoaded', function () {
    let scoreViewText = document.getElementById('score');
    let score;

    //우클릭 방지 이벤트
    document.addEventListener('contextmenu', function (event) {
        return event.preventDefault();
    });

    //로컬스토리지에 정보가 있다면 이어하기
    if(JSON.parse(localStorage.getItem('score')) !== 0) {
        score = Number(JSON.parse(localStorage.getItem('score')));
        scoreViewText.textContent = JSON.parse(localStorage.getItem('score'));
    }
    //새로운 접속이면 0부터 시작
    else {
        score = 0;
        scoreViewText.textContent = 0;
    }

    //클릭 했을 경우, 클릭수 + 1 이벤트
    document.body.onclick = function (event) {
        scoreViewText.textContent = Number(scoreViewText.textContent) + 1;

        score += 1;

        localStorage.setItem('score', JSON.stringify(score));
    };
});
