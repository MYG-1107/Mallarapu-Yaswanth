const root = document.documentElement;
const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");
const themeToggle = document.getElementById("theme-toggle");
const yearNode = document.getElementById("year");

if (yearNode) yearNode.textContent = String(new Date().getFullYear());

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  if (themeToggle) {
    themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
    themeToggle.setAttribute("aria-pressed", String(savedTheme === "dark"));
  }
} else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  root.setAttribute("data-theme", "dark");
  if (themeToggle) {
    themeToggle.textContent = "☀️";
    themeToggle.setAttribute("aria-pressed", "true");
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    themeToggle.textContent = next === "dark" ? "☀️" : "🌙";
    themeToggle.setAttribute("aria-pressed", String(next === "dark"));
  });
}

if (siteNav && menuToggle) {
  const links = siteNav.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (siteNav.classList.contains("open")) {
        siteNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}
