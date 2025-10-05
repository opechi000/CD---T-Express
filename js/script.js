const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
    delay: 5000,
    },
    effect: "fade",
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


