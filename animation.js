document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".error-message__image, .error-message__title, .error-message__text, .error-message__button");
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("visible");
      }, index * 500);
    });
  });
  