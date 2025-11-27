import { cards } from "/js/cards.js";
// const { image, alt, heading, body, cta } = cards;

const displayCard = cards
  .map(function (card) {
    return `
        <div class="cards-content__box cards-content__box--1">
          <a href="#"><img src="${card.image}" alt="${card.alt}" /></a>
          <div class="cards-body">
          <span class="cards-heart-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg></span>
            <h3 class="cards-title">${card.heading}</h3>
          </div>
        </div>`;
  })
  .join("");

document.querySelector(".cards-content").innerHTML = displayCard;
{
  /* <a class="cards-btn" href="#">${card.cta}</a> */
}
{
  /* <p class="cards-text">${card.body}</p> */
}

(function () {
  const track = document.querySelector(".carousel__track");
  const slides = Array.from(document.querySelectorAll(".carousel__slide"));
  const nextButton = document.querySelector(".carousel__button--next");
  const prevButton = document.querySelector(".carousel__button--prev");
  const dotsNav = document.querySelector(".carousel__dots");
  const dots = Array.from(document.querySelectorAll(".carousel__dot"));
  let current = 0;
  function updateCarousel() {
    track.style.transform = `translateX(-${current * 100}vw)`;
    slides.forEach((slide, idx) =>
      slide.classList.toggle("carousel__slide--active", idx === current)
    );
    dots.forEach((dot, idx) =>
      dot.classList.toggle("carousel__dot--active", idx === current)
    );
  }
  nextButton.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    updateCarousel();
  });
  prevButton.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    updateCarousel();
  });
  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      current = idx;
      updateCarousel();
    });
  });
  window.addEventListener("resize", updateCarousel);
})();

document.querySelector(".mobile-menu").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav-links").classList.toggle("active");
});
