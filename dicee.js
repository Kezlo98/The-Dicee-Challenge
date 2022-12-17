let diceNumber1 = Math.floor(Math.random() * 5 + 1);
let diceNumber2 = Math.floor(Math.random() * 5 + 1);

let dice1 = "images/dice" + diceNumber1 + ".png";
let dice2 = "images/dice" + diceNumber2 + ".png";

let image1 = document.querySelectorAll("img")[0];
let image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", dice1);
image2.setAttribute("src", dice2);

if (diceNumber1 < diceNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Win !!!!";
} else if (diceNumber1 === diceNumber2) {
  document.querySelector("h1").innerHTML = "🚩We have a Tie🚩";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Win !!!!🚩";
}
