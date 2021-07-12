$('.owl-carousel').owlCarousel({
  loop:false,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      650:{
          items:3
      },
      1200:{
          items:5
      }
  }
})

$(document).ready(function(){
    $('.hamburger').click(function(){
      $(this).toggleClass('active');
      $('.menu').toggleClass('active');
      
    })
  })