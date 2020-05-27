const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav .menu-border');
    const sub_links = document.querySelectorAll('.nav .subservice .serve');
    
    burger.addEventListener('click', () => {
        //toggles nav
        nav.classList.toggle('nav-active');
        [].forEach.call(sub_links,function(el){
          el.classList.remove('serve-active');
        })
        //Animates links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation ='';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
            link.classList.remove('menu-border-active');
        });
        //burger animation
        burger.classList.toggle('toggle');
    });
}

const serveSlide = () => { 
    const menu_links = document.querySelectorAll('.nav .menu-border');
    const sub_links = document.querySelectorAll('.nav .subservice .serve');
    const servicelink = document.querySelector('.services');
    const desktoplink = document.querySelector('.subservice');
    servicelink.addEventListener('click',() => {
      for (var i = 0; i < menu_links.length; i++)
      {
        console.log(i);
        menu_links[i].classList.toggle('menu-border-active');
      }
      for (var i = 0; i < sub_links.length; i++){
        sub_links[i].classList.toggle('serve-active');
      }
      desktoplink.classList.toggle('sub-active');
    });
};

serveSlide();
navSlide();

// slideshow carousel script 
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