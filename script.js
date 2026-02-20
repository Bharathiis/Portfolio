// Run after page loads
window.addEventListener("DOMContentLoaded", () => {
  // Intro animation: hide after 2 seconds and show About section
  setTimeout(() => {
    const intro = document.getElementById("intro");
    const about = document.getElementById("about");

    if (intro) intro.style.display = "none";
    if (about) {
      about.classList.add("visible");
      about.scrollIntoView({ behavior: "smooth" });
    }
  }, 2000);

  // Reveal sections on scroll
  const sections = document.querySelectorAll(".section");
  if (sections.length > 0) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach(section => observer.observe(section));
  }
});

// Show menu sections with animation
function showSection(id) {
  const allSections = document.querySelectorAll(".menu-content");
  allSections.forEach(sec => {
    sec.classList.remove("visible");
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add("visible");
    target.scrollIntoView({ behavior: "smooth" });
  }
}
