const input =document.getElementById("slide-input").value;
console.log(input);
const het = window.innerHeight; 
const full= document.querySelector('#banner').clientHeight;
const bar = full - het; 
console.log(bar);


window.onload = function(){
document.getElementById("cover").click();
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
document.getElementsByTagName("body")[0].classList.add("light-theme");	
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
const y =document.getElementsByTagName("body")[0].classList.remove("display");
}







/* Accordion JS */
const one =document.getElementById("acc-one");
const two =document.getElementById("acc-two");
const three =document.getElementById("acc-three"); 
const four =document.getElementById("acc-four");
const five =document.getElementById("acc-five"); 

const ek =document.getElementById("one-rot");
const dau =document.getElementById("two-rot");
const tin =document.getElementById("three-rot");
const chaar =document.getElementById("four-rot");
const panch =document.getElementById("five-rot");

const given =document.getElementById("acc");


function accone() {
if(one.classList.contains('acc-ani')) {
one.classList.remove('acc-ani');
one.classList.add('acc-ani2');		
ek.style.transform ="none";
}else {
one.classList.add('acc-ani');			
one.classList.remove('acc-ani2');
ek.style.transform ="rotate(45deg)";	
}				
}

function acctwo() {
if(two.classList.contains('acc-ani')) {
two.classList.remove('acc-ani');
two.classList.add('acc-ani2');		
dau.style.transform ="none";
}else {
two.classList.add('acc-ani');			
two.classList.remove('acc-ani2');
dau.style.transform ="rotate(45deg)";	
}				
}

function accthree() {
if(three.classList.contains('acc-ani')) {
three.classList.remove('acc-ani');
three.classList.add('acc-ani2');		
tin.style.transform ="none";
}else {
three.classList.add('acc-ani');			
three.classList.remove('acc-ani2');
tin.style.transform ="rotate(45deg)";	
}				
}

function accfour() {
if(four.classList.contains('acc-ani')) {
four.classList.remove('acc-ani');
four.classList.add('acc-ani2');		
chaar.style.transform ="none";
}else {
four.classList.add('acc-ani');			
four.classList.remove('acc-ani2');
chaar.style.transform ="rotate(45deg)";	
}				
}

function accfive() {
if(five.classList.contains('acc-ani')) {
five.classList.remove('acc-ani');
five.classList.add('acc-ani2');		
panch.style.transform ="none";
}else {
five.classList.add('acc-ani');			
five.classList.remove('acc-ani2');
panch.style.transform ="rotate(45deg)";	
}				
}









const specifiedElement = document.getElementById("acc-one"); document.addEventListener("click", (event) => { 
const isClickInside = specifiedElement.contains(event.target); if (!isClickInside) {
one.classList.remove('acc-ani');
one.classList.add('acc-ani2');		
ek.style.transform ="none";
}
});
const specifiedElemen = document.getElementById("acc-two"); document.addEventListener("click", (event) => { 
const isClickInside = specifiedElemen.contains(event.target); if (!isClickInside) {
two.classList.remove('acc-ani');
two.classList.add('acc-ani2');		
dau.style.transform ="none";
}
});
const specifiedEleme = document.getElementById("acc-three"); document.addEventListener("click", (event) => { 
const isClickInside = specifiedEleme.contains(event.target); if (!isClickInside) {
three.classList.remove('acc-ani');
three.classList.add('acc-ani2');		
tin.style.transform ="none";
}
});
const specifiedElem = document.getElementById("acc-four"); document.addEventListener("click", (event) => {
const isClickInside = specifiedElem.contains(event.target); if (!isClickInside) {
four.classList.remove('acc-ani');
four.classList.add('acc-ani2');		
chaar.style.transform ="none";
}
});
const specifiedEle = document.getElementById("acc-five"); 
document.addEventListener("click", (event) => { 
const isClickInside = specifiedEle.contains(event.target); if (!isClickInside) {
five.classList.remove('acc-ani');
five.classList.add('acc-ani2');		
panch.style.transform ="none";
}
});








/* Javascript for scrollspy */
const link-one =document.getElementById("co");
const one-sec =document.getElementById("courses"); 

if(one-sec.offsetTop ==="50px") {
link-one.classList.add('active');
}

