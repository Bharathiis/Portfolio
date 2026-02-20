// Intro Click
const intro=document.getElementById("intro");
const main=document.getElementById("mainContent");

intro.addEventListener("click",()=>{
intro.style.display="none";
main.style.display="block";
});

// Typing Animation
const text="Mechanical Engineering student passionate about mechanical design, CAD modelling and engineering problem solving. Experienced in AutoCAD, PTC Creo and Fusion 360 with internship exposure at NLC Limited and Arduino-based safety project development.";
let i=0;
function typing(){
if(i<text.length){
document.getElementById("typingText").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,25);
}
}
setTimeout(typing,500);

// Toggle Sections
function toggleSection(id){
const el=document.getElementById(id);
if(el.style.maxHeight){
el.style.maxHeight=null;
}else{
el.style.maxHeight=el.scrollHeight+"px";
}
}

// Scroll Progress
window.onscroll=()=>{
let winScroll=document.documentElement.scrollTop;
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
let scrolled=(winScroll/height)*100;
document.getElementById("progressBar").style.width=scrolled+"%";
};

// Dark Mode Toggle
document.getElementById("themeToggle").onclick=()=>{
document.body.classList.toggle("dark");
};

// Heart Click Animation
document.addEventListener("click",(e)=>{
let heart=document.createElement("div");
heart.innerHTML="❤";
heart.style.position="fixed";
heart.style.left=e.clientX+"px";
heart.style.top=e.clientY+"px";
heart.style.color="pink";
heart.style.fontSize="18px";
heart.style.pointerEvents="none";
heart.style.animation="floatUp 1s forwards";
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),1000);
});

document.head.insertAdjacentHTML("beforeend",`
<style>
@keyframes floatUp{
0%{transform:translateY(0);opacity:1;}
100%{transform:translateY(-80px);opacity:0;}
}
</style>
`);
