// Intro animation: hide after 2 seconds and scroll to About
window.onload = function() {
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("about").classList.add("visible");
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
  }, 2000);

  // Reveal sections on scroll
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
};

// Show menu sections with animation
function showSection(id) {
  document.querySelectorAll(".menu-content").forEach(sec => {
    sec.classList.remove("visible");
  });
  const target = document.getElementById(id);
  if (target) {
    target.classList.add("visible");
    target.scrollIntoView({behavior: "smooth"});
  }
}
