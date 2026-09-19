
const navbarButton = document.getElementById('navbarButton');
const navLinks = document.getElementById('navLinks');

console.log(navbarButton, navLinks);

navbarButton.addEventListener('click', () =>{
    navLinks.classList.toggle('open');
    navbarButton.classList.toggle('open');
})


//CLOSE MOBILE MENU AFTER CLICKING A LINK

navLinks.querySelectorAll('a').forEach(link =>{
    link.addEventListener('click', () =>{
        navLinks.classList.remove('open');
        navbarButton.classList.remove('open');
    })
})


//HIGHLIGHT ACTIVE NAV LINK ON SCROLL

const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            const id = entry.target.getAttribute('id');
            navAnchors.forEach(a => {
                a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--accent)' : '';
            });
        }
    });
}, {rootMargin: '-40% 0px -50% 0px'});

sections.forEach(section => observer.observe(section));


//PARALLAX DRIFT ON THE ON THE CONTOUR BACKGROUND

const contourBg = document.querySelector('.contour-bg');
let isticking = false;

window.addEventListener('scroll', () =>{
    if(!isticking){
        requestAnimationFrame(() =>{
            contourBg.style.transform = `translateY ${window.scrollY * 0.08}px`;
            isticking = false;
        });
        isticking = true;
    };
}, {passive: true});


//SCROLL REVEAL

const sr = ScrollReveal({
    distance: "20px",
    duration: 2700,
    reset:true
});

sr.reveal('.hero-left-side', {
    delay: 200,
    origin: 'top'
});

sr.reveal('.hero-right-side', {
    delay: 200,
    origin: 'bottom'
});

sr.reveal('#about, #skills, #research, #resume, #contact', {
    delay: 200,
    origin: 'bottom'
});

sr.reveal('.project-card, .research-area-card', {
    delay: 200,
    interval: 600,
    origin: 'bottom'
});






// CUSOR
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    document.body.classList.add('custom-cursor-active');

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });

    function animateCursor() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, .button, .contact-icon'
    );

    interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });

        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });

