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