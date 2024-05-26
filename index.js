var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png" 

var ImageRandomSource ="images/" + randomDiceImage ; // images/dicex.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",ImageRandomSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1 ; // random 1 - 6 

var randomDiceImage2 = "dice" + randomNumber2 +".png";

var ImageRandomSource2 = "images/" + randomDiceImage2 ;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",ImageRandomSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  