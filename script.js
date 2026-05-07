const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const roleTarget = document.querySelector("[data-dynamic-role]");
const year = document.querySelector("[data-year]");

year.textContent = new Date().getFullYear();

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

const roles = [
  "Software Engineer",
  "Research Builder",
  "Gamer",
  "Problem Solver",
  "Lifelong Learner",
];

let roleIndex = 0;
let charIndex = roles[0].length;
let isDeleting = true;

const typeRole = () => {
  const role = roles[roleIndex];
  roleTarget.textContent = role.slice(0, charIndex);

  if (isDeleting) {
    charIndex -= 1;
  } else {
    charIndex += 1;
  }

  if (!isDeleting && charIndex > role.length) {
    isDeleting = true;
    setTimeout(typeRole, 1200);
    return;
  }

  if (isDeleting && charIndex < 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 250);
    return;
  }

  setTimeout(typeRole, isDeleting ? 48 : 74);
};

if (roleTarget) {
  setTimeout(typeRole, 900);
}
