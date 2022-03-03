const menuBtn = document.querySelector('#menu-btn');
const slider = document.querySelector('.nav-slider');

menuBtn.addEventListener('click', () => {
    slider.classList.toggle('show');
})