var reviewSlider = new Swiper(".swiper-container__reviews", {
  spaceBetween: 30,
  centeredSlides: true,
  grabCursor: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
