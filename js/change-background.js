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
        bg.style.backgroundImage = 'url(./img/earth.png)';
    }
    else if (score >= TO_THE_MOON && score < THE_MOON) {
        bg.style.backgroundImage = 'url(./img/moon.png)';
    }
    else if (score >= THE_MOON && score < TO_THE_MARS) {
        bg.style.backgroundImage = 'url(./img/moonToMars.png)';
    }
    else if (score >= TO_THE_MARS && score < THE_MARS) {
        bg.style.backgroundImage = 'url(./img/mars.png)';
    }
    else if (score >= THE_MARS && score < TO_THE_JUPITER) {
        bg.style.backgroundImage = 'url(./img/marsToJupiter.png)';
    }
    else if (score >= TO_THE_JUPITER && score < THE_JUPITER) {
        bg.style.backgroundImage = 'url(./img/jupiter.png)';
    }
    else if (score >= THE_JUPITER && score < TO_THE_SATURN) {
        bg.style.backgroundImage = 'url(./img/jupiterToSaturn.png)';
    }
    else if (score >= TO_THE_SATURN && score < THE_SATURN) {
        bg.style.backgroundImage = 'url(./img/saturn.png)';
    }
    else if (score >= THE_SATURN && score < TO_THE_URANUS) {
        bg.style.backgroundImage = 'url(./img/saturnToUranus.png)';
    }
    else if (score >= TO_THE_URANUS && score < THE_URANUS) {
        bg.style.backgroundImage = 'url(./img/uranus.png)';
    }
    else if (score >= THE_URANUS && score < TO_THE_NEPTUNE) {
        bg.style.backgroundImage = 'url(./img/uranusToNeptune.png)';
    }
    else if (score >= TO_THE_NEPTUNE) {
        bg.style.backgroundImage = 'url(./img/neptune.png)';
    }
};