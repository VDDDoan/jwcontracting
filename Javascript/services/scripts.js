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
showSlides(slideIndex, 'slide', 'dot');
showSlides(slideIndex, 'slide1', 'dot1');
showSlides(slideIndex, 'slide2', 'dot2');
showSlides(slideIndex, 'slide3', 'dot3');
showSlides(slideIndex, 'slide4', 'dot4');
showSlides(slideIndex, 'slide5', 'dot5');

// NEXT AND PREVIOUS CONTROL
function plusSlides(n, slide, dot){
  showSlides(slideIndex += n, slide, dot);
}

//Controls the current slide and resets interval if needed
function currentSlide(n, slide, dot){
  showSlides(slideIndex = n, slide, dot);
}

function showSlides(n, slide, dot){
  var i;
  var slides = document.getElementsByClassName(slide);
  var dots = document.getElementsByClassName(dot);
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


