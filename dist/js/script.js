//Hamburger
const Hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');
});

//navbar-fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNavbar = header.offsetTop;

    if (window.pageYOffset > fixedNavbar) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}