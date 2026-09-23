/* =========================================
   MENÚ PARA CELULAR
========================================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("active");
});

/* =========================================
   CERRAR MENÚ AL HACER CLIC
========================================= */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("active");
    });
});

/* =========================================
   AÑO AUTOMÁTICO DEL FOOTER
========================================= */

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

/* =========================================
   ANIMACIÓN AL HACER SCROLL
========================================= */

const elements = document.querySelectorAll(
    ".service-card, .process-step, .about-text"
);

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.15
    }
);

elements.forEach(function (element) {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity .7s ease, transform .7s ease";
    observer.observe(element);
});