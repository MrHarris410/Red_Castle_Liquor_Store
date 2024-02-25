const menu = document.querySelector('#menu-mobile');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuLinks.classList.toggle('active');
});