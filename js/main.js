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
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  function openModal() {
    var modalDialog = $(".modal__dialog");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalDialog = $(".modal__dialog");
    modalDialog.removeClass("modal__dialog--visible");
  }
  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      var modalDialog = $(".modal__dialog");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });
});
