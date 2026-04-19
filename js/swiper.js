var swiper = new Swiper(".slide-swp", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true, 
      clickable: true
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false, 
    },
    loop: true
});
/* Swiper slide products */
var swiperProducts = new Swiper(".slide_product", { 
    slidesPerView: 5, 
    spaceBetween: 20,
    autoplay: {
        delay: 2800,
        disableOnInteraction: false, 
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    loop: true,
 breakpoints: {
                        1200: { slidesPerView: 5 },
                        1000: { slidesPerView: 4 },
                        700: { slidesPerView: 3 },
                        0: { slidesPerView: 2 }
                    }
});
// shop swiper

var swiperScented = new Swiper(".scented_swiper_container", { 
    slidesPerView: 4, 
    spaceBetween: 20,
    autoplay: {
        delay: 2800,
        disableOnInteraction: false, 
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    loop: true,
    breakpoints: {
        1200: { slidesPerView: 4 },
        1000: { slidesPerView: 3 },
        700: { slidesPerView: 2 },
        0: { slidesPerView: 1 }
    }
    
});
var swiperScented = new Swiper(".aromatherapy_swiper_container", { 
    slidesPerView: 4, 
    spaceBetween: 20,
    autoplay: {
        delay: 2800,
        disableOnInteraction: false, 
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    loop: true,
    breakpoints: {
        1200: { slidesPerView: 4 },
        1000: { slidesPerView: 3 },
        700: { slidesPerView: 2 },
        0: { slidesPerView: 1 }
    }
    
});

// why_us_swiper
var whyUsSwiper = new Swiper(".why_us_swiper", {
    slidesPerView: 3,          
    spaceBetween: 30,        
    loop: true,              
    autoplay: {
        delay: 3000,          
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {            
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        0: { slidesPerView: 1 }
    }
});
// reviews_swiper
var reviewsSwiper = new Swiper(".reviews_swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 4000,          
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        0: { slidesPerView: 1 }
    }
});