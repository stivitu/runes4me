function myFunction() {
var randomNumber1 = Math.floor(Math.random() * 48) + 1;
var randomImage1 = "r" + randomNumber1 + ".png";
var randomSource1 = "images/" + randomImage1;

var randomNumber2 = Math.floor(Math.random() * 48) + 1;
var randomImage2 = "r" + randomNumber2 + ".png";
var randomSource2 = "images/" + randomImage2;

var randomNumber3 = Math.floor(Math.random() * 48) + 1;
var randomImage3 = "r" + randomNumber3 + ".png";
var randomSource3 = "images/" + randomImage3;
var audio = new Audio("sounds/sve.mp3");
var user = document.querySelector("#cast");

document.querySelectorAll("img")[0].setAttribute("src", randomSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomSource2);
document.querySelectorAll("img")[2].setAttribute("src", randomSource3);
user.addEventListener("on click", audio.play());

if (randomNumber1===randomNumber2) {myFunction();}
else if (randomNumber2===randomNumber3) {myFunction();}
else if (randomNumber1===randomNumber3) {myFunction();}
else if (randomNumber2===randomNumber1+24) {myFunction();}
else if (randomNumber3===randomNumber1+24) {myFunction();}
else if (randomNumber1===randomNumber2+24) {myFunction();}
else if (randomNumber3===randomNumber2+24) {myFunction();}
else if (randomNumber1===randomNumber3+24) {myFunction();}
else if (randomNumber2===randomNumber3+24) {myFunction();}
}

function myFunction1() {
var randomNumber4 = Math.floor(Math.random() * 48) + 1;
var randomImage4 = "r" + randomNumber4 + ".png";
var randomSource4 = "images/" + randomImage4;
document.querySelectorAll("img")[3].setAttribute("src", randomSource4);
var audio1 = new Audio("sounds/jedna.mp3");
var user1 = document.querySelector("#result");
user1.addEventListener("click", audio1.play());
}

function myFunction2(){
var source5 = "images/blanka.png";
document.querySelectorAll("img")[0].setAttribute("src", source5);
document.querySelectorAll("img")[1].setAttribute("src", source5);
document.querySelectorAll("img")[2].setAttribute("src", source5);
document.querySelectorAll("img")[3].setAttribute("src", source5);
var audio2 = new Audio("sounds/jedna.mp3");
var user2 = document.querySelector("#reset");
user2.addEventListener("click", audio2.play());
}

