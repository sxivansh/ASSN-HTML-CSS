document.addEventListener("DOMContentLoaded", function () {
   
  
    const carousel = document.querySelector(".carousel");
    const carouselItems = document.querySelectorAll(".carousel-item");
  
    let currentIndex = 0;
  
    function showNextItem() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      updateCarousel();
    }
  

    function updateCarousel() {
      const newTransformValue = -currentIndex * 100 + "%";
      carousel.style.transform = `translateX(${newTransformValue})`;
    }
  
    
    function startAutomaticTransition() {
      setInterval(showNextItem, 3000); 
    }
  
 
    setTimeout(startAutomaticTransition, 2000);
  });


