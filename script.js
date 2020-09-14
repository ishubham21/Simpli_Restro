/*Carousel for specialities in each section*/
$('#top-carsl').owlCarousel({
    center:false,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items: 3
        }
    },
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
})