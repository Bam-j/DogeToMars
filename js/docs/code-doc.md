# DogeToMars 프로젝트 Document
이 문서는 제2학기 캡스톤 프로젝트 DogeToMars의 소스코드를 설명하는 문서입니다.

---
## change-background.js
특정 n회의 클릭(터치) 횟수에 도달할 경우 배경화면 이미지를 바꿔줍니다.

### 사용된 변수/상수 <br>
|상수|설명|
|:---:|:---|
|TO_THE_SKY ~ TO_THE_NEPTUNE<br>일련의 선언된 상수들|if ~ else문 조건식의 간결하고 명료한 기술을 위한 상수들로, 지구로 부터 다른 행성까지의 거리인 **number** type 상수들입니다.|

### changeBackground()
click-event.js에서 호출되는 함수 모듈로, score 파라미터를 이용해서 특정 클릭 횟수 조건을 만족하면 배경 이미지를 변경해줍니다.

|파라미터|설명|
|:---:|:---|
|bg|click-event.js에서 전달받은 \<body\>태그 DOM 요소입니다. document.getElementById('body')로 취득되어 전달받았습니다.|
|score|click-event.js에서 전달받은 현재 유저의 클릭횟수입니다.|

|프로퍼티|설명|
|:---:|:---|
|bg.style.backgroundImage|취득한 bg 요소의 style 속성 중 background-image에 접근하는 프로퍼티 입니다. 'url(경로)'를 통해 이미지 주소를 지정해주었고, 이때 경로는 상대경로로 img 폴더의 .png 이미지들에 접근하였습니다.|

---
## click-event.js
기본적인 1회 클릭을 처리하는 이벤트부터 각종 불필요한 클릭(터치) 이벤트 삭제를 담당하는 메인 js파일입니다.

### 사용된 변수
|변수|설명|
|:---:|:---|
|bg|배경화면 교체 이벤트 처리를 위한 변수로 \<body\> 태그를 취득했습니다.|
|scoreView|유저의 클릭(터치) 횟수에 따라 변하는 score를 보여주기 위한 변수입니다. html에서 스코어를 보여주는 요소를 취득했습니다.|
|score|실제 클릭 횟수를 담고, 연산 및 changeBackground()에 인수로 전달되는 변수입니다.|
|lastTouchEndTime|모바일 환경의 웹 브라우저에서 더블탭 확대기능을 막는 함수에 활용되는 최근 터치 시간 저장용 변수입니다.|

### 이벤트(이벤트 리스너)
코드의 첫번째 줄부터 시작하여 등장 순서를 기준으로 표를 작성하였습니다.

|이벤트|설명|
|:---:|:---|
|addEventListener('contextmenu')|우클릭을 무효화 하는 이벤트입니다.listner 함수의 인자로 우클릭 event를 전달하고 이를 preventDefault()로 이벤트가 취소되게 하여 우클릭을 해도 아무런 일이 발생하지 않습니다.|
|addEventListener('click')|클릭했을 때의 이벤트입니다. score를 1증가시키고, 증가된 score를 다시 scoreView로 전달해서 플레이어에게 현재 점수를 실시간으로 볼 수 있게 만들어 줍니다.<br>이벤트를 body태그 전체에 설정하여, 페이지 내의 어느 곳을 클릭하더라도 +1이벤트가 발생합니다.<br>또한 효과음 출력도 하고있습니다. |
|addEventListener('touchend')|모바일 환경에서 더블탭을 통한 확대를 막기 위해 터치가 끝나는 순간을 활용하는 이벤트리스너입니다.<br> 마지막 터치가 끝나는 시점을 기록했다가 다음 터치가 **0.7초** 이내에 발생하면 그 터치를 무효화함으로써 더블탭 확대를 막았습니다.<br>단, 애플의 safari 환경에서는 애플의 정책상 더블 탭 줌을 막는것을 비허용하여 safari 환경에서는 작동하지 않습니다.|
|addEventListener('touchstart')|핀치 줌 확대를 막기 위한 이벤트입니다. 하나의 터치가 시작되고나서 다른 터치가 감지되면 그 터치를 무효화 함으로써 2개 이상의 터치를 막습니다.<br>마찬가지로 웹의 모든 요소에 적용되게 하였습니다.|

### local storage
개인의 클릭 횟수 기록은 로컬스토리지에 저장됩니다. 로컬스토리지는 사용자의 브라우저 내부에 저장되어 브라우저를 껐다 켜도 유지가 됩니다.<br>
사용자가 브라우저를 변경하거나, 삭제하거나, 기록 삭제에서 쿠키를 지우지 않는 이상 이 정보는 브라우저에 저장되어있습니다.<br>

```
if (JSON.parse(localStorage.getItem('score')) !== 0) {
  score = Number(JSON.parse(localStorage.getItem('score')));
  scoreView.textContent = JSON.parse(localStorage.getItem('score'));
  changeBackground(bg, parseInt(score));
}
else {
  score = 0;
  scoreView.textContent = 0;
}
```
- if문을 통해 이미 score 정보가 local storage에 남아있다면, scoreView에 이전에 플레이하던 정보를 이어서 표시해줍니다.
새로운 유저일 경우는 0부터 시작하도록 처리했습니다.

---
## db-connect.js, high-score.js
최고 점수에 관한 동작을 담당하는 js 파일입니다.

---
## php/server-system.php
점수 저장용 DB와 그 일련의 동작들