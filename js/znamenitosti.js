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
        
    })
})

$('.formCloseIcon').click(function(event) {
    $('.formSuccess').css({
        'opacity': '0',
        
    })
})

$('.bookModalCloseIcon').click(function() {
    $('.bookModal').css({
        'opacity': '0',
        
    });
    $('.bookModal_container').css({    
        'top': '-100%',      
    })
})



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
$('.sezann').click(function(){
    $('.sezann_open').toggleClass('visible')
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
$('.elvis').click(function(){
    $('.elvis_open').addClass('visible')
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
$('.oscar').click(function(){
    $('.oscar_open').addClass('visible')
})
$('.edgar').click(function(){
    $('.edgar_open').addClass('visible')
})
$('.lincoln').click(function(){
    $('.lincoln_open').addClass('visible')
})
$('.margaret').click(function(){
    $('.margaret_open').addClass('visible')
})
$('.victoria').click(function(){
    $('.victoria_open').addClass('visible')
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