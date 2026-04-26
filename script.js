document.addEventListener("DOMContentLoaded", function () {

const intro = document.getElementById("intro");
const main = document.getElementById("mainContent");
const modal = document.getElementById("modalOverlay");
const modalBody = document.getElementById("modalBody");
const themeBtn = document.getElementById("themeToggle");
const progressBar = document.getElementById("progressBar");

/* =========================
   INTRO CLICK
========================= */
intro.addEventListener("click", () => {
intro.style.display = "none";
main.style.display = "block";
startTyping();
});

/* =========================
   MODAL OPEN (ONLY MODAL SHOW)
========================= */
window.openModal = function(id){
const content = document.getElementById(id);
if(!content) return;

modalBody.innerHTML = content.innerHTML;
modal.classList.add("active");

/* 🔥 Hide background */
main.style.display = "none";

/* 🔥 Disable scroll */
document.body.style.overflow = "hidden";
};

/* =========================
   MODAL CLOSE
========================= */
window.closeModal = function(){
modal.classList.remove("active");

/* 🔥 Show background again */
main.style.display = "block";

/* 🔥 Enable scroll */
document.body.style.overflow = "auto";
};

/* =========================
   CLOSE ON OUTSIDE CLICK
========================= */
modal.addEventListener("click", (e)=>{
if(e.target === modal){
closeModal();
}
});

/* =========================
   THEME TOGGLE
========================= */
themeBtn.addEventListener("click", ()=>{
document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
themeBtn.textContent = "☀️";
}else{
themeBtn.textContent = "🌙";
}
});

/* =========================
   SCROLL PROGRESS BAR
========================= */
window.addEventListener("scroll", ()=>{
const scrollTop = document.documentElement.scrollTop;
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
const progress = (scrollTop / height) * 100;
progressBar.style.width = progress + "%";
});

/* =========================
   TYPING EFFECT
========================= */
function startTyping(){

const textElement = document.getElementById("typingText");

const fullText = textElement.textContent.trim();
textElement.textContent = "";

let index = 0;

function type(){
if(index < fullText.length){
textElement.textContent += fullText.charAt(index);
index++;
setTimeout(type, 15);
}
}

type();
}

});
