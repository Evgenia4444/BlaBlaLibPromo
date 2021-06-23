$(document).ready(function () {
  $(".nav_btn").click(function () {
    $('.modal').toggleClass("pink");

  });

});


// $(document).ready(function(){
//   $('.randomBtn').click(function(){
//    randomizer()
//   })
// })

function randomizer() {
  x = Math.floor((Math.random() * 3) + 1);
  console.log(x)
  let person = `<img src='images/randomImage${x}.png'>`
  console.log(person)
  $('.randomImage_container').html(person)
}

let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;


$('.carousel_button-next').on("click", function () {
    moveToNextSlide();
});


$('.carousel_button-prev').on("click", function () {
    moveToPrevSlide();
});

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel_item-visible');
        slide.classList.add('carousel_item-hidden');
    }

    slides[slidePosition].classList.add('carousel_item-visible');
    
}

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    updateSlidePosition();
    
}