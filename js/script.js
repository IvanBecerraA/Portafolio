/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
};


/*==================== scroll reveal ====================*/
ScrollReveal({ 
    //reset: true,
    distance: '200px',
    duration: 2000,
    delay: 300
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .logo, .skills-box, .about-content', { origin: 'left' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Backend Developer', 'Ingeniero en Informática', 'FullStack Developer'],
    typeSpeed: 100,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
});


/*==================== Cambio de colores ====================*/
let celeste = document.querySelector(".celeste a");
let morado = document.querySelector(".morado a");
// let amarillo = document.querySelector(".amarillo a");
let naranjo = document.querySelector(".naranjo a");
const root = document.documentElement;
const imgAbout = document.querySelector(".about-img img");

celeste.addEventListener('click', () => {
    root.style.setProperty('--main-color', '#0ef');
    imgAbout.src = 'img/about-1.png';
});

morado.onclick = () => {
    root.style.setProperty('--main-color', 'rgb(98, 0, 255)');
    // root.style.setProperty('--bg-color', '#fff');
    // root.style.setProperty('--second-bg-color', '#ccc');
    // root.style.setProperty('--text-color', '#000');
    imgAbout.src = 'img/about-2.png';
}

// amarillo.addEventListener('click', () => {
//     root.style.setProperty('--main-color', 'rgb(229, 255, 0)');
//     imgAbout.src = 'img/about-3.png';
// });

naranjo.onclick = () => {
    root.style.setProperty('--main-color', 'rgb(255, 145, 0)');
    imgAbout.src = 'img/about-4.png';
}


/*==================== dark mode ====================*/
let sun = document.querySelector('#sun');

sun.onclick = () => {
    if (sun.classList.contains('bx-sun')) {
        sun.classList.remove('bx-sun');
        sun.classList.add('bx-moon');
        root.style.setProperty('--bg-color', '#fff');
        root.style.setProperty('--second-bg-color', 'rgb(242, 246, 247)');
        root.style.setProperty('--text-color', '#000');
    } else {
        sun.classList.remove('bx-moon');
        sun.classList.add('bx-sun');
        root.style.setProperty('--bg-color', '#1f242d');
        root.style.setProperty('--second-bg-color', '#323946');
        root.style.setProperty('--text-color', '#fff');
    }
}