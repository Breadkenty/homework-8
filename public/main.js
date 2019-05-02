let suits = ["Hearts", "Clubs", "Spades", "Diamonds"];
let faces = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King"
];
let deck = [];

const createDeck = () => {
  for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
    for (let faceIndex = 0; faceIndex < faces.length; faceIndex++) {
      deck.push({
        suit: suits[suitIndex],
        face: faces[faceIndex]
      });
    }
  }
};

const randomCard = () => {
  createDeck();
  const randomNumber = Math.floor(Math.random() * 52);
  const randomCard = deck[randomNumber];
  const formattedCard = `${randomCard.face} of ${randomCard.suit}`;
  document.querySelector("#card").textContent = formattedCard;
};

const main = () => {
  randomCard();
  document
    .querySelector("#newCard")
    .addEventListener("click", () => randomCard());
};

document.addEventListener("DOMContentLoaded", main);
