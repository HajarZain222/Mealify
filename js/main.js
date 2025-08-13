// === Navigation Active Link on Click & Scroll ===
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
    const offset = 100; // navbar height offset

    // Go directly to Home on page load
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });

    // On nav link click → set active link
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // On scroll → update active link based on section
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});

// === Mobile Menu Toggle ===
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");
const closeBtn = mobileMenu.querySelector(".close i");
const mobileLinks = mobileMenu.querySelectorAll(".nav-link");

// Close menu when clicking any mobile link
mobileLinks.forEach(link => link.addEventListener("click", closeMenu));

// Open menu
menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    overlay.classList.add("active");
});

// Close menu function
function closeMenu() {
    mobileMenu.classList.remove("open");
    overlay.classList.remove("active");
}

// Close menu on close button or overlay click
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// === Dark Mode Toggle with Icon Style Change ===
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('themeToggle');
    const icon = themeBtn.querySelector('i');

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            // Dark mode → Show regular sun
            icon.className = 'fa-regular fa-sun';
        } else {
            // Light mode → Show solid moon
            icon.className = 'fa-solid fa-moon';
        }
    });
});


