const bg = document.getElementsByTagName('body');

const changeBackground = score => {
    if(score==100) {
        bg.style.backgroundImage = '';
    }
};