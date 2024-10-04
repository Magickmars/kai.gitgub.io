let slideIndex = 1;
let timer;

document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);
  timer = setInterval(() => plusSlides(1), 3000); // Change slide every 3 seconds
});

function plusSlides(n) {
  clearInterval(timer); // Clear the timer to reset it
  showSlides(slideIndex += n);
  timer = setInterval(() => plusSlides(1), 3000); // Restart the timer
}

function currentSlide(n) {
  clearInterval(timer); // Clear the timer to reset it
  showSlides(slideIndex = n);
  timer = setInterval(() => plusSlides(1), 3000); // Restart the timer
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
