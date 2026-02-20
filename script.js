
// INTRO CLICK
const intro = document.getElementById("intro");
const main = document.getElementById("mainContent");

intro.addEventListener("click", () => {
intro.style.display="none";
main.style.display="block";
});

// TOGGLE FUNCTION
function toggleSection(id){
const el = document.getElementById(id);

if(el.style.maxHeight){
el.style.maxHeight = null;
}else{
el.style.maxHeight = el.scrollHeight + "px";
}
}

// HEART CLICK EFFECT
document.addEventListener("click",(e)=>{
let heart = document.createElement("div");
heart.className="heart";
heart.innerHTML="❤";

heart.style.left = e.clientX + "px";
heart.style.top = e.clientY + "px";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),1000);
});
