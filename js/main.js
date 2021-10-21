document.addEventListener('DOMContentLoaded', function () {
    let scoreViewText = document.getElementById('score');
    let score;
    let lastTouchEndTime = 0;

    //우클릭 방지 이벤트
    document.addEventListener('contextmenu', function (event) {
        return event.preventDefault();
    }, false);

    //로컬스토리지에 정보가 있다면, 저장된 클릭 횟수 부터 표시하고 카운트
    if (JSON.parse(localStorage.getItem('score')) !== 0) {
        score = Number(JSON.parse(localStorage.getItem('score')));
        scoreViewText.textContent = JSON.parse(localStorage.getItem('score'));
    }
    //새로운 접속이면 0부터 시작
    else {
        score = 0;
        scoreViewText.textContent = 0;
    }

    //클릭 했을 경우, 클릭수 + 1 이벤트
    document.body.addEventListener('click', function () {
        scoreViewText.textContent = Number(scoreViewText.textContent) + 1;

        score += 1;

        localStorage.setItem('score', JSON.stringify(score));
    }, false);


    //터치 이벤트
    /*document.body.addEventListener('touchstart', function (event) {
        scoreViewText.textContent = Number(scoreViewText.textContent) + 1;

        score += 1;

        localStorage.setItem('score', JSON.stringify(score));
    }, false);*/

    document.addEventListener('touchend', function (event) {
        let currentTouchEndTime = (newDate()).getTime();

        if (currentTouchEndTime - lastTouchEndTime <= 300) {
            event.preventDefault();
        }
        lastTouchEndTime = currentTouchEndTime;
    }, false);

}, false);
