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

    $('.formBtn').click(function() {
        $('.formSuccess').css({
            'opacity': '1',
            'top': '20%',
        })
    })
    
    $('.formBtn').click(function(event) {
        event.preventDefault();
    })
    
    $('.nav_btn').click(function(event) {
        $('.bookModal').css({
            'opacity': '1',
            'top': '50%',
            'pointer-events': 'visible'
        });
        $('.bookModal_container').css({
           
            'top': '80px',
            
        });
        $('.mobileMenu').removeClass('menuVisible')
    
    })
    
    $('.bookModalCloseIcon').click(function() {
        $('.bookModal').css({
            'opacity': '0',
            
        });
        $('.bookModal_container').css({    
            'top': '-100%',      
        })
    })
    
    
    $('.formCloseIcon').click(function(event) {
        $('.formSuccess').css({
            'opacity': '0',
            
        })
    })
    
    