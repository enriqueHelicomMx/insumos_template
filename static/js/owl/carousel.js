$("document").ready(function($){

    const topProducts = $('.article-carousel__container'),
          specialServices = $('.owl__services');

    const homeSlide = $('.home-carousel');

    topProducts.owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                dots: false,
                nav: false,
            },

            390: {
                dots: false,
                nav: false,
                items: 2,
            },

            768: {
                dots: false,
                nav: false,
                items: 3,
            },

            992: {
                dots: false,
                nav: false,
                items: 5,
            },
        }
    });

    specialServices.owlCarousel({
        items: 0,
        loop: false,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                autoplay: true,
                dots: false,
                nav: false,
            },

            390: {
                loop: true,
                autoplay: true,
                dots: false,
                nav: false,
                items: 1,
            },

            768: {
                loop: true,
                dots: false,
                nav: false,
                items: 3,
            },

            992: {
                dots: false,
                nav: false,
                items: 4,
            },
        }
    });

    homeSlide.owlCarousel({
        items:1,
        autoplay:true,
        loop:true,
        dots:false,
        slideSpeed: 300,
        singleItem:true
    });


});