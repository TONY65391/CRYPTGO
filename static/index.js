const header = document.querySelector('header');
const menuBtn = header.querySelector('nav .menu-btn');
const menu = header.querySelector('nav .menu');
const closeBtn = menu.querySelector('.close-nav .close-btn');
const main = document.querySelector('main');

menuBtn.addEventListener('click', () => {
    menu.classList.remove('close');
    menu.classList.add('open');
    main.classList.remove('undim')
    main.classList.add('dim');
    window.scrollY = 0;
})
closeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
    menu.classList.add('close');
    main.classList.remove('dim');
    main.classList.add('undim')
})