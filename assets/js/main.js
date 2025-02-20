const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navItem = document.querySelectorAll(".nav__item"),
header = document.getElementById("header");

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme preference
let isDarkMode = localStorage.getItem('theme') === 'light' ? false : true;

// Apply saved theme on load
if (!isDarkMode) {
  document.body.classList.add('light-mode');
  themeToggle.innerHTML = '<i class="ri-moon-line"></i>';
}

themeToggle.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('light-mode');
  themeToggle.innerHTML = isDarkMode ? '<i class="ri-sun-line"></i>' : '<i class="ri-moon-line"></i>';
  
  // Save theme preference
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// open and close menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeIcon();
});

const scrollToHireMe = () => {
  const hireMeSection = document.getElementById("hireMe");
  hireMeSection.scrollIntoView({ behavior: "smooth" });
};

// close the menu when the user clicks the nav links
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav__menu--open")) {
      navMenu.classList.remove("nav__menu--open");
    }
    changeIcon();
  });
});

// Change nav toggle icon
function changeIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
  }
}

// header scroll animation
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// Enhanced ScrollReveal animations
const sr = ScrollReveal({
  duration: 1500,
  distance: '60px',
  delay: 400,
  reset: false,
  mobile: true,
  easing: 'cubic-bezier(0.5, 0, 0, 1)'
});

// Apply enhanced animations with smoother transitions
sr.reveal('.hero__content', { origin: 'top' });
sr.reveal('.hero__img', { origin: 'bottom', delay: 600 });
sr.reveal('.hero__info-wrapper', { origin: 'left', interval: 100 });
sr.reveal('.skills__content', { origin: 'right', interval: 100 });
sr.reveal('.qualification__content', { origin: 'left' });
sr.reveal('.service__card', { 
  origin: 'bottom',
  interval: 200,
  beforeReveal: (el) => {
    el.style.transform = 'scale(0.8)';
  },
  afterReveal: (el) => {
    el.style.transform = 'scale(1)';
  }
});
sr.reveal('.project__content', { 
  origin: 'bottom',
  interval: 300,
  distance: '40px'
});

// Update copyright year
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.querySelector('.footer__copyright');
  const currentYear = new Date().getFullYear();
  yearSpan.innerHTML = yearSpan.innerHTML.replace('{currentYear}', currentYear);
});
