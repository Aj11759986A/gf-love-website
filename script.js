// ===== PASSWORD =====

const PASSWORD = "0727";

function checkPass(){

const input = document.getElementById("pass").value;

if(input === PASSWORD){

document.getElementById("login").style.display="none";

document.getElementById("home").style.display="flex";

document.getElementById("bgmusic").play();

typeWriter();

}

else{

document.getElementById("wrong").innerHTML="❌ Wrong Passcode ❤️";

}

}



// ===== TYPING TEXT =====

const text="Happy Girlfriend Day ❤️";

let i=0;

function typeWriter(){

if(i<text.length){

document.querySelector(".title").innerHTML+=text.charAt(i);

i++;

setTimeout(typeWriter,120);

}

}



// ===== NEXT PAGE =====

function nextPage(){

alert("❤️ Welcome My Love ❤️\n\nAb asli surprise shuru hone wala hai...");

}



// ===== FLOATING HEARTS =====

const heartContainer=document.querySelector(".hearts");

function createHeart(){

const heart=document.createElement("span");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*35)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,250);



// ===== MUSIC BUTTON (Future) =====

const music=document.getElementById("bgmusic");

music.volume=0.7;
