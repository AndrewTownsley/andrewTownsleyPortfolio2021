const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuCloseBtn = document.getElementById('mobileMenuCloseBtn');
const main = document.getElementById('main');

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('open');
}


mobileMenuBtn.addEventListener('click', toggleMobileMenu);
mobileMenuCloseBtn.addEventListener('click', toggleMobileMenu);
