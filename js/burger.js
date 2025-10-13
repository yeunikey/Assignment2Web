const burger = document.querySelector('.header__burger');
const fullscreenMenu = document.getElementById('fullscreenMenu');
const closeBtn = document.getElementById('closeFullscreen');

burger.addEventListener('click', () => {
    fullscreenMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    fullscreenMenu.classList.remove('active');
});

fullscreenMenu.addEventListener('click', (e) => {
    if (e.target === fullscreenMenu) {
        fullscreenMenu.classList.remove('active');
    }
});
