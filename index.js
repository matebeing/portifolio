const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
})

window.sr = ScrollReveal({ reset: false });

sr.reveal('#introduction', { duration: 4500 });
sr.reveal('#about-me', {delay: 1000, duration: 3000 });
sr.reveal('#skills', {delay: 1000, duration: 3000 });