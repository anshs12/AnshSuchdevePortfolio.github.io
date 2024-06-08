/* TOGGLE ICON NAVBAR */
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navBar.classList.toggle('active');
}

/* SCROLL SECTION ACTIVE LINK */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop = 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* STICKY NAVBAR */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* REMOVE TOGGLE ICON AND NAVBAR */
    menuIcon.classList.remove('fa-xmark');
    navBar.classList.remove('active');
};

/* SCROLL REVEAL */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content h3, .heading', {
    origin: 'top'
});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {
    origin: 'bottom'
});
ScrollReveal().reveal('.home-content h1, .home-content p, .about-content h2, .about-content p, .services h2, .portfolio h2, .contact h2, .footer-iconTop', {
    origin: 'left'
});
ScrollReveal().reveal('.social-media a, .btn, .services-box i, .portfolio-layer h4, .footer-text', {
    origin: 'right'
});
