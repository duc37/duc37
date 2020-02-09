$(document).ready(function(){
    $('.toggle-collpase').click(function(){
        $('.nav').toggleClass('collapse')
    })


    $('.owl-carousel').owlCarousel({
        loop:true,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsiveClass:true,
        responsive:{
            0:{items:1},
            750:{items:2},
            1024:{items:3}
        }
        

    });

    AOS.init();
    $('.site-background').tilt({

    })
})