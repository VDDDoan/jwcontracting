//For the hamburger menu, adds responsive to the class 
//For the hamburger menu, adds responsive to the class 
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav li');
  
  burger.addEventListener('click', () => {
      //toggles nav
      nav.classList.toggle('nav-active');
      //Animates links
      navLinks.forEach((link, index) => {
          if(link.style.animation){
              link.style.animation ='';
          }
          else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
      });
      //burger animation
      burger.classList.toggle('toggle');
  });
}

navSlide();

// slideshow carousel script for first container
var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
  
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// slideshow carousel script for second container
var slideIndex1 = 1;
var myTimer1;
var slideshowContainer1;

window.addEventListener("load",function() {
    showSlides1(slideIndex1);
    myTimer1 = setInterval(function(){plusSlides1(1)}, 4000);
  
})

// NEXT AND PREVIOUS CONTROL
function plusSlides1(n){
  clearInterval(myTimer1);
  if (n < 0){
    showSlides1(slideIndex1 -= 1);
  } else {
    showSlides1(slideIndex1 += 1); 
  }
  if (n === -1){
    myTimer1 = setInterval(function(){plusSlides1(n + 2)}, 4000);
  } else {
    myTimer1 = setInterval(function(){plusSlides1(n + 1)}, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide1(n){
  clearInterval(myTimer1);
  myTimer1 = setInterval(function(){plusSlides1(n + 1)}, 4000);
  showSlides1(slideIndex1 = n);
}

function showSlides1(n){
  var i;
  var slides1 = document.getElementsByClassName("slide1");
  var dots1 = document.getElementsByClassName("dot1");
  if (n > slides1.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
  }
  for (i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";
  dots1[slideIndex1-1].className += " active";
}



// slideshow carousel script for 3rd container
var slideIndex2 = 1;
var myTimer2;
var slideshowContainer2;

window.addEventListener("load",function() {
    showSlides2(slideIndex2);
    myTimer2 = setInterval(function(){plusSlides2(1)}, 4000);
  
})

// NEXT AND PREVIOUS CONTROL
function plusSlides2(n){
  clearInterval(myTimer2);
  if (n < 0){
    showSlides2(slideIndex2 -= 1);
  } else {
   showSlides2(slideIndex2 += 1); 
  }
  if (n === -1){
    myTimer2 = setInterval(function(){plusSlides2(n + 2)}, 4000);
  } else {
    myTimer2 = setInterval(function(){plusSlides2(n + 1)}, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide2(n){
  clearInterval(myTimer2);
  myTimer2 = setInterval(function(){plusSlides2(n + 1)}, 4000);
  showSlides2(slideIndex2 = n);
}

function showSlides2(n){
  var i;
  var slides2 = document.getElementsByClassName("slide2");
  var dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active";
}

// slideshow carousel script for 4th container
var slideIndex3 = 1;
var myTimer3;
var slideshowContainer3;

window.addEventListener("load",function() {
    showSlides3(slideIndex3);
    myTimer3 = setInterval(function(){plusSlides3(1)}, 4000);
  
})

// NEXT AND PREVIOUS CONTROL
function plusSlides3(n){
  clearInterval(myTimer3);
  if (n < 0){
    showSlides3(slideIndex3 -= 1);
  } else {
   showSlides3(slideIndex3 += 1); 
  }
  if (n === -1){
    myTimer3 = setInterval(function(){plusSlides3(n + 2)}, 4000);
  } else {
    myTimer3 = setInterval(function(){plusSlides3(n + 1)}, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide3(n){
  clearInterval(myTimer3);
  myTimer3 = setInterval(function(){plusSlides3(n + 1)}, 4000);
  showSlides3(slideIndex3 = n);
}

function showSlides3(n){
  var i;
  var slides3 = document.getElementsByClassName("slide3");
  var dots3 = document.getElementsByClassName("dot3");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";
  }
  for (i = 0; i < dots3.length; i++) {
      dots3[i].className = dots3[i].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";
  dots3[slideIndex3-1].className += " active";
}

// slideshow carousel script for 5th container
var slideIndex4 = 1;
var myTimer4;
var slideshowContainer4;

window.addEventListener("load",function() {
    showSlides4(slideIndex4);
    myTimer4 = setInterval(function(){plusSlides4(1)}, 4000);
  
})

// NEXT AND PREVIOUS CONTROL
function plusSlides4(n){
  clearInterval(myTimer4);
  if (n < 0){
    showSlides4(slideIndex4 -= 1);
  } else {
   showSlides4(slideIndex4 += 1); 
  }
  if (n === -1){
    myTimer4 = setInterval(function(){plusSlides4(n + 2)}, 4000);
  } else {
    myTimer4 = setInterval(function(){plusSlides4(n + 1)}, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide4(n){
  clearInterval(myTimer4);
  myTimer4 = setInterval(function(){plusSlides4(n + 1)}, 4000);
  showSlides4(slideIndex4 = n);
}

function showSlides4(n){
  var i;
  var slides4 = document.getElementsByClassName("slide4");
  var dots4 = document.getElementsByClassName("dot4");
  if (n > slides4.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = slides4.length}
  for (i = 0; i < slides4.length; i++) {
      slides4[i].style.display = "none";
  }
  for (i = 0; i < dots4.length; i++) {
      dots4[i].className = dots4[i].className.replace(" active", "");
  }
  slides4[slideIndex4-1].style.display = "block";
  dots4[slideIndex4-1].className += " active";
}

// slideshow carousel script for 6th container
var slideIndex5 = 1;
var myTimer5;
var slideshowContainer5;

window.addEventListener("load",function() {
    showSlides5(slideIndex5);
    myTimer5 = setInterval(function(){plusSlides5(1)}, 4000);
  
})

// NEXT AND PREVIOUS CONTROL
function plusSlides5(n){
  clearInterval(myTimer5);
  if (n < 0){
    showSlides5(slideIndex5 -= 1);
  } else {
   showSlides5(slideIndex5 += 1); 
  }
  if (n === -1){
    myTimer5 = setInterval(function(){plusSlides5(n + 2)}, 4000);
  } else {
    myTimer5 = setInterval(function(){plusSlides5(n + 1)}, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide5(n){
  clearInterval(myTimer5);
  myTimer5 = setInterval(function(){plusSlides5(n + 1)}, 4000);
  showSlides5(slideIndex5 = n);
}

function showSlides5(n){
  var i;
  var slides5 = document.getElementsByClassName("slide5");
  var dots5 = document.getElementsByClassName("dot5");
  if (n > slides5.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = slides5.length}
  for (i = 0; i < slides5.length; i++) {
      slides5[i].style.display = "none";
  }
  for (i = 0; i < dots5.length; i++) {
      dots5[i].className = dots5[i].className.replace(" active", "");
  }
  slides5[slideIndex5-1].style.display = "block";
  dots5[slideIndex5-1].className += " active";
}