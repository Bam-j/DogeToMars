const TO_THE_SKY = 100;
const TO_THE_SPACE = 1000;
const TO_THE_MOON = 380000;
const THE_MOON = 400000;
const TO_THE_MARS = 80000000;
const THE_MARS = 120000000;
const TO_THE_JUPITER = 630000000;
const THE_JUPITER = 800000000;
const TO_THE_SATURN = 1280000000;
const THE_SATURN = 1550000000;
const TO_THE_URANUS = 2720000000;
const THE_URANUS = 3000000000;
const TO_THE_NEPTUNE = 4350000000;

export const changeBackground = (bg, score) => {
    if (score >= TO_THE_SKY && score < TO_THE_SPACE) {
        bg.style.backgroundImage = 'url(./img/sky.png)';
    }
    else if (score >= TO_THE_SPACE && score < TO_THE_MOON) {
        bg.style.backgroundImage = 'url(./../img/earth.png)';
    }
    else if (score >= TO_THE_MOON && score < TO_THE_MARS) {
        bg.style.backgroundImage = 'url(./../img/moonToMars.png)';
    }
    else if (score >= TO_THE_MARS && score < TO_THE_JUPITER) {
        bg.style.backgroundImage = 'url(./../img/marsToJupiter.png)';
    }
    else if (score >= TO_THE_JUPITER && score < TO_THE_SATURN) {
        bg.style.backgroundImage = 'url(./../img/jupiterToSaturn.png)';
    }
    else if (score >= TO_THE_SATURN && score < TO_THE_URANUS) {
        bg.style.backgroundImage = 'url(./../img/saturnToUranus.png)';
    }
    else if (score >= TO_THE_URANUS && score < TO_THE_NEPTUNE) {
        bg.style.backgroundImage = 'url(./../img/uranusToNeptune.png)';
    }
    else if (score >= TO_THE_NEPTUNE) {
        bg.style.backgroundImage = 'url(./../img/neptune.png)';
    }
};

/*
##개발에 도움이 되는 자료## <- 개발 완료 후 주석 삭제할 것
작성해놓은 코드는 이 작업의 전부이자 끝이니까, 작성해놓은 코드를 참조해서 써도 좋음!
1. 처음 0에서 100km까지는 대류권 => 이곳은 땅 혹은 도시, 혹은 풀밭을 배경이미지로 할 것
2. 대류권에서 대기권까지 100 ~ 1000KM => 100번 이후 1000번 클릭까지 배경화면은
    하늘 그림 혹은 사진을 배경 이미지로 만들 것
3. 1000번 이후에는 우주를 배경으로 만듦니다.
4. 지구에서 달까지 거리는 약 38만km라고 하는데 1000번 이후 38만회 터치는 동기부여를 떨어뜨릴 수 있으니
    3만 8천회로 줄여서 3만8천회 터치에 도달하면 우주 배경에 달이 있는 사진으로 교체
    => 이 터치 수를 3천 8백회로 줄일지 고민되는 부분
5. 지구에서 화성까지는 약 2억km라고 합니다. (이것도 가장 짧은 거리 기준) 2억회 터치도 위와같은 문제를 발생시키므로
    이 부분에 대해 회의가 필요합니다. 8만회, 2만회 등

화성 이후에도 플레이는 계속 되어야 하므로 같은 식으로 지구~해왕성 까지 구현할 예정
 */