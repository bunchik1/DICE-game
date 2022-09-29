
let gameOn =false;
const diceGame = ()=>{
   // Random number 1
if(gameOn){
   var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

 var randomImageSource = "images/" + randomDiceImage;

 var image1 = document.querySelectorAll("img")[0]
 image1.setAttribute("src", randomImageSource)



// Random Number 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

 var randomImageSource2 = "images/" + randomDiceImage2;

 var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)

// If else statment
 if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 is winner"
 }else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 is winner"
 }else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw"
 };   
}
}

var numberButton = document.querySelector(".btn").length;
document.querySelector(".btn").addEventListener("click" ,diceGame);
document.querySelector(".start").addEventListener("click" ,()=>{
   document.querySelector('.startgame').innerHTML = 'Game is started';
   gameOn = true;
});