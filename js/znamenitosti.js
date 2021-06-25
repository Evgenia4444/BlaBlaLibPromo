$(".person_card").hover( function () {
    
    $(this).toggleClass('cardOnHover');
    $(this).children('.person_card-bottom').toggleClass('cardBottomOnHover');
});


// $(".person_card").hover( function () {
    
//     $(this).toggleClass('cardOnHover');
//     $('.person_card-bottom').toggleClass('cardBottomOnHover');
// });


$('.vangogh').click(function(){
    $('.vangogh_open').toggleClass('visible')
})

$('.klodmone').click(function(){
    $('.klodmone_open').toggleClass('visible')
})

$('.edgardega').click(function(){
    $('.edgardega_open').toggleClass('visible')
})

$('.salvador').click(function(){
    $('.salvador_open').toggleClass('visible')
})
$('.frida').click(function(){
    $('.frida_open').toggleClass('visible')
})
$('.freddie').click(function(){
    $('.freddie_open').toggleClass('visible')
})
$('.bethoven').click(function(){
    $('.bethoven_open').toggleClass('visible')
})

$('.amy').click(function(){
    $('.amy_open').addClass('visible')
})
$('.michael').click(function(){
    $('.michael_open').addClass('visible')
})
$('.ferenc').click(function(){
    $('.ferenc_open').addClass('visible')
})
$('.ernest').click(function(){
    $('.ernest_open').addClass('visible')
})
$('.julesverne').click(function(){
    $('.julesverne_open').addClass('visible')
})
$('.dostoevski').click(function(){
    $('.dostoevski_open').addClass('visible')
})
$('.arthur').click(function(){
    $('.arthur_open').addClass('visible')
})
$('.lincoln').click(function(){
    $('.lincoln_open').addClass('visible')
})











$('.closeIcon').click(function(){
    $('.person_card-open').removeClass('visible')
})

$('.whiteCloseIcon').click(function(){
    $('.cardSuccess').css({
        'opacity': '0'
    })
})


$('.card_btn').click(function(){
    $('.cardSuccess').css({
        'opacity': '1'
    })
})



$('.burgerMenu').click(function() {
    $('.mobileMenu').toggleClass('menuVisible')
})