const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Somi this the toggle nav
        nav.classList.toggle('nav-active');

 //Animate Links
 navLinks.forEach((link, index) =>{
    if(link.style.animation){
        link.style.animation = '';
    }else{
link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`;
    }
})

//burger animation
burger.classList.toggle('toggle');

    });
   
}

navSlide();




var currentSlide = 0;

const slides = document.querySelectorAll(".slide")

const dots = document.querySelectorAll('.dot')

const init = (n) => {

slides.forEach((slide) => {

slide.style.display = "none"

dots.forEach((dot) => {

dot.classList.remove("active")

})

})

slides[n].style.display = "block"

dots[n].classList.add("active")

}

document.addEventListener("DOMContentLoaded", init(currentSlide))


const next = () => {

currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++

init(currentSlide)

}

const prev = () => {

currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--

init(currentSlide)

}



document.querySelector(".next").addEventListener('click', next)

document.querySelector(".prev").addEventListener('click', prev)
 
setInterval(() => {

next()

}, 5000);









document.getElementsByClassName()