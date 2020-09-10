/*Carousel for specialities in each section*/
$('#top-carousel').owlCarousel({
    center:true,
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1300:{
            items: 3
        }
    },
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
})