$(document).ready(function () {
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
    loop: true,
    navigation: {
      nextEl: ".story__button_next",
      prevEl: ".story__button_prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
  /*$(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        email: {
          required: "*If you want to subscribe leave your email",
          email: "*Your email address must be in the format of name@domain.com",
        },
      },
    });
  });*/
});
