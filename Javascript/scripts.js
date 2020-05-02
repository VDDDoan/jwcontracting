//For the hamburger menu, adds responsive to the class 
const navSlide = () => {
    const burger = document.querySelector('#hamburger-menu');
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
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        })
    });
}

navSlide();

// When the user scrolls the page, execute scrollFunction
/*window.onscroll = function(){scrollFunction()};
var header = document.getELementByID("header");
var sticky = header.offsetTop;*/