$(document).ready(function(){
    $(".nav_btn").click(function(){
      $('.modal').toggleClass("pink");
      
    });

});


// $(document).ready(function(){
//   $('.randomBtn').click(function(){
//    randomizer()
//   })
// })

function randomizer () {
  x = Math.floor((Math.random()*3)+1);
  console.log(x)
  let person = `<img src='images/randomImage${x}.png'>`
  console.log(person) 
  $('.randomImage_container').html(person)
}