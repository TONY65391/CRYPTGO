const header = document.querySelector('header');
const menuBtn = header.querySelector('nav .menu-btn');
const menu = header.querySelector('nav .menu');
const closeBtn = menu.querySelector('.close-nav .close-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.remove('close');
    menu.classList.add('open')
})
closeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
    menu.classList.add('close');
})