const het = window.innerHeight; 
const full= document.querySelector('#banner').clientHeight;
const bar = full + het; 
console.log(bar);


window.onload = function(){
var local =localStorage.getItem("dark");
const x =document.getElementById("switch");
if(local == 1) {
document.getElementsByTagName("body")[0].classList.add("light-theme");				
x.style.justifyContent ="flex-start";						
}
else if(local == 2) {
document.getElementsByTagName("body")[0].classList.add("dark-theme");				
x.style.justifyContent ="flex-end";		
}
else {
document.getElementsByTagName("body")[0].classList.add("dark-theme");	
}
}


function menu() {
const x =document.getElementById("nav");
if(x.style.height ==="275px") {
x.style.height ="60px";				
x.style.paddingBottom ="0px";
document.getElementsByTagName("body")[0].classList.remove("body");		
}
else {
x.style.height ="275px";				
x.style.paddingBottom ="10px";
document.getElementsByTagName("body")[0].classList.add("body");		
}				
}

 
document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('nav');
    if (!container.contains(e.target)) {
        container.style.height ="60px";				
container.style.paddingBottom ="0px";
document.getElementsByTagName("body")[0].classList.remove("body");		
    }});				


function swi() {
const x =document.getElementById("switch");
const p =document.getElementById("switcher");
if(x.style.justifyContent ==="flex-end") {
x.style.justifyContent ="flex-start";			
document.getElementsByTagName("body")[0].classList.add("light-theme");				
document.getElementsByTagName("body")[0].classList.remove("dark-theme");		
localStorage.setItem("dark", 1);
}
else {
x.style.justifyContent ="flex-end";		
document.getElementsByTagName("body")[0].classList.add("dark-theme");				
document.getElementsByTagName("body")[0].classList.remove("light-theme");			
localStorage.setItem("dark", 2);
}				
}


function cha(){
var x = window.matchMedia("(min-width: 768px)");
var y =document.getElementById("nav");
document.getElementById("banner").style.setProperty('height' , 'calc(100vh - 16px)');
if (x.matches){
y.style.height ="60px";
y.style.paddingBottom ="0px";
document.getElementsByTagName("body")[0].classList.remove("body");		
}
}


/* 
var het =window.innerHeight;
document.getElementById("banner").style.height =het; */




function get(){
const counters = document.querySelectorAll('.num');
const speed = 100; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 700);
		} else {
			counter.innerText = target + "+";
		}
	};

	updateCount();
});
}






const counters = document.querySelectorAll('.load-num');
const speed = 100; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 100);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});



const myTimeout = setTimeout(stop, 11000);
function stop(){
const x =document.getElementsByClassName("loader")[0];
x.classList.add("load-none");
}
