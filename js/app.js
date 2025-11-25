import { cards } from "/js/cards.js";
// const { image, alt, heading, body, cta } = cards;

const displayCard = cards
  .map(function (card) {
    return `
        <div class="cards-content__box cards-content__box--1">
          <a href="#"><img src="${card.image}" alt="${card.alt}" /></a>
          <div class="cards-body">
          <h3 class="cards-title">${card.heading}</h3>
          <p class="cards-text">${card.body}</p>
          
          </div>
        </div>`;
  })
  .join("");

document.querySelector(".cards-content").innerHTML = displayCard;
{/* <a class="cards-btn" href="#">${card.cta}</a> */ }