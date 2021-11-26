const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobileMenu');

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('open');
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);