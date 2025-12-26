// 🌗 Dark/Light Mode
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.toggleAttribute("data-theme", "dark");
});

// 🎨 Project Filters
const filterBtns = document.querySelectorAll(".filters button");
const projects = document.querySelectorAll(".project");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const cat = btn.getAttribute("data-category");
    projects.forEach(p => {
      p.style.display = cat === "all" || p.dataset.category === cat 
        ? "block" 
        : "none";
    });
  });
});

// ✨ Smooth scroll for older browsers
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
