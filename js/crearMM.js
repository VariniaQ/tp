var slideIndex = 1;
showSlides(slideIndex);

// Control de siguiente/anterior
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Control de las imagenes miniaturas
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");

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

  function escribir() {
  var x = document.getElementById("texto").value;
  document.getElementById("meme").innerHTML= x;
}
function escribirB() {
var x = document.getElementById("textob").value;
document.getElementById("memeb").innerHTML= x;
}
function escribir1() {
var x = document.getElementById("texto1").value;
document.getElementById("meme1").innerHTML= x;
}
function escribirB1() {
var x = document.getElementById("textob1").value;
document.getElementById("memeb1").innerHTML= x;
}
function escribir2() {
var x = document.getElementById("texto2").value;
document.getElementById("meme2").innerHTML= x;
}
function escribirB2() {
var x = document.getElementById("textob2").value;
document.getElementById("memeb2").innerHTML= x;
}
function escribir3() {
var x = document.getElementById("texto3").value;
document.getElementById("meme3").innerHTML= x;
}
function escribirB3() {
var x = document.getElementById("textob3").value;
document.getElementById("memeb3").innerHTML= x;
}
function escribir4() {
var x = document.getElementById("texto4").value;
document.getElementById("meme4").innerHTML= x;
}
function escribirB4() {
var x = document.getElementById("textob4").value;
document.getElementById("memeb4").innerHTML= x;
}
function escribir5() {
var x = document.getElementById("texto5").value;
document.getElementById("meme5").innerHTML= x;
}
function escribirB5() {
var x = document.getElementById("textob5").value;
document.getElementById("memeb5").innerHTML= x;
}
window.setInterval (BlinkIt, 500);
var color = "red";
function BlinkIt () {
var blink = document.getElementById ("blink");
color = (color == "#ffffff")? "red" : "#ffffff";
blink.style.color = color;
blink.style.fontSize='36px';}
