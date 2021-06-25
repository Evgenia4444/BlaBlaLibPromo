$('.burgerMenu').click(function () {
  $('.mobileMenu').toggleClass('menuVisible')
})

$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});


let slidePosition = 0;
const slides = document.getElementsByClassName('book_carousel_item');
const totalSlides = slides.length;


$('.carousel_button-next').on("click", function () {
  moveToNextSlide();
});


$('.carousel_button-prev').on("click", function () {
  moveToPrevSlide();
});

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('book_carousel_item-visible');
    slide.classList.add('book_carousel_item-hidden');
  }

  slides[slidePosition].classList.add('book_carousel_item-visible');
  console.log(slidePosition)

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
