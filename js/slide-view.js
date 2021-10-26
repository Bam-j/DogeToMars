document.addEventListener('DOMContentLoaded', function () {
    const slideBtn = document.getElementById('slide_view_btn');
    const slideMenu = document.getElementById('slide_ranking_view');
    const closeMenuBtn = document.getElementById('close_btn');

    //랭킹을 표시할 슬라이드 서랍 메뉴 만들기
    slideBtn.addEventListener('click', function() {
        slideBtn.style['display'] = 'none';
        slideMenu.style['transform'] = 'translate(0px, 0px)';
        slideMenu.style['msTransform'] = "translate(0px, 0px)";
        slideMenu.style['mozTransform'] = "translate(0px, 0px)";
        slideMenu.style['webkitTransform'] = "translate(0px, 0px)";
        slideMenu.style['oTransform'] = "translate(0px, 0px)";
    }, false);

    closeMenuBtn.addEventListener('click', function () {
        slideBtn.style['display'] = 'block';
        slideMenu.removeAttribute('style');
    }, false);
}, false);