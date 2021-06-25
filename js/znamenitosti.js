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



$('.burgerMenu').click(function() {
    $('.mobileMenu').toggleClass('menuVisible')
})