const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
})

window.sr = ScrollReveal({ reset: false });

sr.reveal('#introduction', { duration: 3500 });
sr.reveal('#about-me', {duration: 2000 });
sr.reveal('#skills', {duration: 2000 });
sr.reveal('#projects', {duration: 2000 });
sr.reveal('#contact', { duration: 2500 });
sr.reveal('.scrollreveal', {duration: 3000})