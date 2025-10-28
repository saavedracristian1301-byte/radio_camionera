// Toggle menú móvil
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});


// Reproductor visible/oculto según scroll
const radioPlayer = document.querySelector('.radio-player');
let lastScrollY = window.scrollY;

if (radioPlayer) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll - lastScrollY > 5) {
            radioPlayer.style.opacity = '0.5';
            radioPlayer.style.transform = 'translateY(20px)';
        } else if (lastScrollY - currentScroll > 5) {
            radioPlayer.style.opacity = '1';
            radioPlayer.style.transform = 'translateY(0)';
        }

        lastScrollY = currentScroll;
    });
}

// Navbar sticky con efecto scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
