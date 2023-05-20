
//fondo verde
const body = document.body;
body.classList.add("bg-green");

//div de carta
const card = document.createElement("DIV");
card.classList.add("card");
body.append(card);

//3 DIVS interiores de la carta
const cardTop = document.createElement("DIV");
const cardMiddle = document.createElement("DIV");
const cardBottom = document.createElement("DIV");

//aplico las clases a los divs internos de la carta
cardTop.classList.add("card-top");
cardMiddle.classList.add("card-middle");
cardBottom.classList.add("card-bottom");

//agrego los 3 div internos a la carta
card.append(cardTop, cardMiddle, cardBottom);

//aplico simbolos en duro para probar como se ve
// cardTop.innerHTML = "♣";
// cardMiddle.innerHTML = "J";
// cardBottom.innerHTML = "♣";

//función para generar número de carta aleatorio
let cardRandomNumber = () => {
  let cardNumbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  let randomIndex = Math.floor(Math.random() * cardNumbers.length);
  return cardNumbers[randomIndex];
};

//función para generar pinta aleatoria

let cardRandomSuit = () => {
  let cardSuits = ["♦", "♥", "♠", "♣"];
  let randomIndex = Math.floor(Math.random() * cardSuits.length);
  let suitColor = randomIndex < 2 ? "card-red" : "card-black";

  //aplico el color de la carta al elemento superior mediante estilo
  let SuitTop = document.querySelector(".card-top");
  SuitTop.classList.add(suitColor);

  //aplico el color de la carta al elemento inferior mediante estilo
  let SuitBottom = document.querySelector(".card-bottom");
  SuitBottom.classList.add(suitColor);

  return cardSuits[randomIndex];
};

//se aplica la pinta random a la parte superior
document.querySelector(".card-top").innerHTML = cardRandomSuit();

//la parte inferior es la misma que la superior (estilo rotado)
document.querySelector(".card-bottom").innerHTML = document.querySelector(
  ".card-top"
).innerHTML;

//número random en el centro de la carta
document.querySelector(".card-middle").innerHTML = cardRandomNumber();
