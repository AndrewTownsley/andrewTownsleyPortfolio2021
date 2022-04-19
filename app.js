const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuCloseBtn = document.getElementById('mobileMenuCloseBtn');
const fadeIn = document.querySelectorAll('.fade-in')
const main = document.getElementById('main');

window.onload = function() {
  Particles.init({
    selector: '.background',
    color: '#4e53a5',
    maxParticles: 60,
  });
};

const options = {
    root: null, // null == viewport
    threshold: 0,
    rootMargin: "-50px"
 };

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        entry.target.classList.toggle('appear');
        observer.unobserve(entry.target);
    })
}, options);

fadeIn.forEach(section => {
    observer.observe(section);
})

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('open');
}


mobileMenuBtn.addEventListener('click', toggleMobileMenu);
mobileMenuCloseBtn.addEventListener('click', toggleMobileMenu);
