const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
})

window.sr = ScrollReveal({ reset: false });

sr.reveal('#introduction', { duration: 4500 });
sr.reveal('#about-me', {duration: 3000 });
sr.reveal('#skills', {duration: 3000 });
sr.reveal('#projects', {duration: 3000 });
sr.reveal('#contact', { duration: 3000 });
sr.reveal('.scrollreveal', {duration: 3500})