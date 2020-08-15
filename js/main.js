var reviewSlider = new Swiper(".swiper-container__reviews", {
  spaceBetween: 30,
  loop: true,
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
});
var storySlider = new Swiper(".story__swiper-container", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".story__button_next",
    prevEl: ".story__button_prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
