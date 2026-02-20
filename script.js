// Intro animation
window.onload = function() {
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
  }, 2000);
};

// Show menu sections
function showSection(id) {
  document.querySelectorAll(".menu-content").forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";
}
