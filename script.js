// Initialize carousel 1
var slideIndex1 = 0;
showSlides(slideIndex1, 'carousel1');

// Initialize carousel 2
var slideIndex2 = 0;
showSlides(slideIndex2, 'carousel2');

// Initialize carousel 3
var slideIndex3 = 0;
showSlides(slideIndex3, 'carousel3');

// Initialize carousel 4
var slideIndex4 = 0;
showSlides(slideIndex4, 'carousel4');

// Initialize carousel 5
var slideIndex5 = 0;
showSlides(slideIndex5, 'carousel5');

function showSlides(n, carouselId) {
  var i;
  var x = document.getElementById(carouselId).getElementsByClassName("mySlides");
  var dots = document.getElementById(carouselId).getElementsByClassName("carousel-indicators")[0].getElementsByTagName("button");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(/(^|\s)active(\s|$)/, " ");
  }
  if (n >= x.length) {n = 0}
  if (n < 0) {n = x.length-1}
  x[n].style.display = "block";  
  dots[n].className += " active";
  n++;
  setTimeout(showSlides, 3000, n, carouselId); // Change image every 3 seconds
}