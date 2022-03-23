const cardArray = [
  {
    name: "cheeseburger",
    image:
      "https://cdn.pixabay.com/photo/2012/04/13/01/51/hamburger-31775_960_720.png",
  },
  {
    name: "fries",
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/01/24/french-fries-155679_960_720.png",
  },
  {
    name: "hotdog",
    image:
      "https://cdn.pixabay.com/photo/2012/04/26/10/44/hotdog-42015_960_720.png",
  },
  {
    name: "ice-cream",
    image:
      "https://cdn.pixabay.com/photo/2016/06/02/22/14/ice-1432278_960_720.png",
  },
  {
    name: "milkshake",
    image:
      "https://cdn.pixabay.com/photo/2012/04/14/15/57/drinks-34377_960_720.png",
  },
  {
    name: "pizza",
    image:
      "https://cdn.pixabay.com/photo/2016/06/01/12/59/pizza-1428931_960_720.png",
  },
  {
    name: "cheeseburger",
    image:
      "https://cdn.pixabay.com/photo/2012/04/13/01/51/hamburger-31775_960_720.png",
  },
  {
    name: "fries",
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/01/24/french-fries-155679_960_720.png",
  },
  {
    name: "hotdog",
    image:
      "https://cdn.pixabay.com/photo/2012/04/26/10/44/hotdog-42015_960_720.png",
  },
  {
    name: "ice-cream",
    image:
      "https://cdn.pixabay.com/photo/2016/06/02/22/14/ice-1432278_960_720.png",
  },
  {
    name: "milkshake",
    image:
      "https://cdn.pixabay.com/photo/2012/04/14/15/57/drinks-34377_960_720.png",
  },
  {
    name: "pizza",
    image:
      "https://cdn.pixabay.com/photo/2016/06/01/12/59/pizza-1428931_960_720.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());
let cardsChosen = [];
let cardChosenIds = [];

const grid = document.querySelector("#grid");

// add images to the grid
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute(
      "src",
      "https://cdn.pixabay.com/photo/2016/10/18/18/19/question-mark-1750942_960_720.png"
    );
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

createBoard();

// check for the match
function checkMatch() {
  const cards = document.querySelectorAll("img");

  if (cardChosenIds[0] === cardChosenIds[1]) {
    alert("you clicked the same image");
    cards[cardChosenIds[0]].setAttribute(
      "src",
      "https://cdn.pixabay.com/photo/2016/10/18/18/19/question-mark-1750942_960_720.png"
    );
    cards[cardChosenIds[1]].setAttribute(
      "src",
      "https://cdn.pixabay.com/photo/2016/10/18/18/19/question-mark-1750942_960_720.png"
    );
  } else if (cardsChosen[0] === cardsChosen[1]) {
    // alert("you found a match");
    cards[cardChosenIds[0]].setAttribute("src", "images/white.png");
    cards[cardChosenIds[1]].setAttribute("src", "images/white.png");
    cards[cardChosenIds[0]].removeEventListener("click", flipCard);
    cards[cardChosenIds[1]].removeEventListener("click", flipCard);
  } else {
    cards[cardChosenIds[0]].setAttribute(
      "src",
      "https://cdn.pixabay.com/photo/2016/10/18/18/19/question-mark-1750942_960_720.png"
    );
    cards[cardChosenIds[1]].setAttribute(
      "src",
      "https://cdn.pixabay.com/photo/2016/10/18/18/19/question-mark-1750942_960_720.png"
    );
  }
  cardsChosen = [];
  cardChosenIds = [];
}

// reveal the image
function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].image);

  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
