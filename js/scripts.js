$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:20,
        navClass: ['slider__nav--left', 'slider__nav--right'],
        nav:true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            900:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
  });