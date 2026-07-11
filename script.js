window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("sticky", window.scrollY > 20);

});


const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}


window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const scrolled=(winScroll/height)*100;

document.getElementById("progressBar").style.width=scrolled+"%";

});


const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});



const text="Virtual Assistant • Administrative Support • Social Media";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,45);

}

}

typing();

const fills=document.querySelectorAll(".skill-fill");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.width=entry.target.getAttribute("style").replace("width:","");

}

});

});

fills.forEach(fill=>{

fill.style.width="0";

observer.observe(fill);

});

window.onload=()=>{

document.getElementById("loader").style.display="none";

}


document.querySelectorAll(".primary-btn,.secondary-btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

gtag('event', 'generate_lead', {

event_category: 'Contact',

event_label: 'Website Inquiry'

});

gtag('event', 'generate_lead', {

event_category: 'Contact',

event_label: 'Website Inquiry'

});

const calendlyBtn = document.querySelector(".calendly-btn");

if (calendlyBtn) {
    calendlyBtn.addEventListener("click", () => {
        gtag('event', 'book_discovery_call', {
            event_category: 'Calendly',
            event_label: 'Discovery Call Click'
        });
    });
}

const chatbot=document.getElementById("chatbot");

const toggle=document.getElementById("chat-toggle");

toggle.onclick=()=>{

chatbot.style.display=

chatbot.style.display==="block"

?

"none"

:

"block";

}

document.querySelectorAll(".chat-option").forEach(button=>{

button.addEventListener("click",()=>{

const body=document.getElementById("chat-body");

let reply="";

switch(button.innerText){

case "Services":

reply="📁 Carmina offers Administrative Support, Email Management, Canva Design, Calendar Management, Data Entry, and Social Media Support.";

break;

case "Rates":

reply="💰 Flexible pricing is available. Hourly, Part-time, Full-time, and custom packages are offered.";

break;

case "Portfolio":

reply="🎨 You can explore Canva designs, admin workflows, spreadsheets, and productivity systems in the Portfolio section.";

break;

case "Discovery Call":

reply="📅 Click the Discovery Call card to schedule a free consultation through Calendly.";

break;

case "Contact":

reply="📧 You can send a message through the contact form or email directly.";

break;

}

body.innerHTML+=`

<div class="bot-message">

${reply}

</div>

`;

body.scrollTop=body.scrollHeight;

});

});