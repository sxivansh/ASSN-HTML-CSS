const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.getElementById('prevButton');
const movebutton=Array.from(document.getElementsByClassName('section-items'));
console.log(prevButton)
const nextButton = document.getElementById('nextButton');
let currentIndex = 0;
movebutton.forEach((element,idx)=> {
    element.addEventListener('click',()=>{
        currentIndex=idx;
        updateCarousel();
    })
});

function updateCarousel() {
    const offset = -currentIndex * 500; 
    carousel.style.transform = `translateX(${offset}px)`;
}