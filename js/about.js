$('.burgerMenu').click(function() {
    $('.mobileMenu').toggleClass('menuVisible')
  })

  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });