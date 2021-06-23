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


$('.button_buy').on('click', function(){
    $('.modal').css('display', 'block')
})
    // $(document).ready(function() {
    //     $('.carousel_button-prev').click(function(){
    //         if(slidePosition === 0){
    //             slidePosition = 0;
    //         } else {
    //             slidePosition--;
    //         }
    //         $('.carousel_item').removeClass('carousel_item-visible');
    //         $('.carousel_item').addClass('carousel_item-hidden');
    //     })
    // })

    // $(document).ready(function() {
    //     $('.carousel_button-next').click(function(){
    //         if(slidePosition === totalSlides - 1){
    //             slidePosition = 0;
    //         } else {
    //             slidePosition++;
    //         }
    //         $('.carousel_item').removeClass('carousel_item-visible');
    //         $('.carousel_item').addClass('carousel_item-hidden');
    //     })
    // })

    // function moveToNextSlide(){
    //     console.log('hey')
    // }


    $('.burgerMenu').click(function() {
        $('.mobileMenu').toggleClass('menuVisible')
    })