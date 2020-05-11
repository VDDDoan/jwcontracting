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
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        })
    });
}

navSlide();

var before1 = document.getElementsByClassName("before-button1");
var after1 = document.getElementsByClassName("after-button1");
var before2 = document.getElementsByClassName("before-button2");
var after2 = document.getElementsByClassName("after-button2");

var function1 = function(){
    var element = document.getElementsByClassName("before-button1");
    for (var i = 0; i < element.length; i++)
    {
        element[i].classList.add("active-button");
    }
    var element_after = document.getElementsByClassName("after-button1");
    for (var i = 0; i < element_after.length; i++)
    {
        element_after[i].classList.remove("active-button");
    }
    var element_img = document.getElementsByClassName("image1");
    for (var i = 0; i < element_img.length; i++)
    {
        element_img[i].src="images/projects/projects_interior/Basement-reno.jpg";
    }
    
}
var function2 = function(){
    var element = document.getElementsByClassName("after-button1");
    for (var i = 0; i < element.length; i++)
    {
        element[i].classList.add("active-button");
    }
    var element_after = document.getElementsByClassName("before-button1");
    for (var i = 0; i < element_after.length; i++)
    {
        element_after[i].classList.remove("active-button");
    }
    var element_img = document.getElementsByClassName("image1");
    for (var i = 0; i < element_img.length; i++)
    {
        element_img[i].src="images/projects/projects_interior/basement-reno2.jpg";
    }
    
}
var function3 = function(){
    var element = document.getElementsByClassName("before-button2");
    for (var i = 0; i < element.length; i++)
    {
        element[i].classList.add("active-button");
    }
    var element_after = document.getElementsByClassName("after-button2");
    for (var i = 0; i < element_after.length; i++)
    {
        element_after[i].classList.remove("active-button");
    }
    var element_img = document.getElementsByClassName("image2");
    for (var i = 0; i < element_img.length; i++)
    {
        element_img[i].src="images/projects/projects_interior/bathroom-reno.jpg";
    }
    
}
var function4 = function(){
    var element = document.getElementsByClassName("after-button2");
    for (var i = 0; i < element.length; i++)
    {
        element[i].classList.add("active-button");
    }
    var element_after = document.getElementsByClassName("before-button2");
    for (var i = 0; i < element_after.length; i++)
    {
        element_after[i].classList.remove("active-button");
    }
    var element_img = document.getElementsByClassName("image2");
    for (var i = 0; i < element_img.length; i++)
    {
        element_img[i].src="images/projects/projects_interior/kitchen-basement.jpg";
    }
    
}

for(var i = 0; i < before1.length; i++)
{
    before1[i].addEventListener('click', function1);
}
for(var i = 0; i < after1.length; i++)
{
    after1[i].addEventListener('click', function2);
}
for(var i = 0; i < before1.length; i++)
{
    before2[i].addEventListener('click', function3);
}
for(var i = 0; i < after1.length; i++)
{
    after2[i].addEventListener('click', function4);
}







//lightbox 

function openModal(){
    document.getElementById("myModal").style.display = "block";
}

function closeModal(){
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n)
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}