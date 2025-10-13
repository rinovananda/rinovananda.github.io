const burger = document.getElementById('burgerMenu');
const nav = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');
});

// Tutup nav setelah mengklik salah satu link (khusus HP)
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
        }
    });
});
