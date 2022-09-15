//a0
var audio = new Audio("sounds/sve.mp3");
var user = document.querySelector("#cast");

//a1
var audio1 = new Audio("sounds/jedna.mp3");
var user1 = document.querySelector("#result");

//a2
var audio1 = new Audio("sounds/jedna.mp3");
var user2 = document.querySelector("#reset");

function myFunction() {
let randomNumber1 = Math.floor(Math.random() * 48) + 1;
let randomImage1 = "r" + randomNumber1 + ".png";
let randomSource1 = "images/" + randomImage1;

let randomNumber2 = Math.floor(Math.random() * 48) + 1;
let randomImage2 = "r" + randomNumber2 + ".png";
let randomSource2 = "images/" + randomImage2;

let randomNumber3 = Math.floor(Math.random() * 48) + 1;
let randomImage3 = "r" + randomNumber3 + ".png";
let randomSource3 = "images/" + randomImage3;
//var audio, user

document.querySelectorAll("img")[0].setAttribute("src", randomSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomSource2);
document.querySelectorAll("img")[2].setAttribute("src", randomSource3);
//a0
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
let randomNumber4 = Math.floor(Math.random() * 48) + 1;
let randomImage4 = "r" + randomNumber4 + ".png";
let randomSource4 = "images/" + randomImage4;
document.querySelectorAll("img")[3].setAttribute("src", randomSource4);
//a1
user1.addEventListener("click", audio1.play());
}

function myFunction2(){
let source5 = "images/blanka.png";
document.querySelectorAll("img")[0].setAttribute("src", source5);
document.querySelectorAll("img")[1].setAttribute("src", source5);
document.querySelectorAll("img")[2].setAttribute("src", source5);
document.querySelectorAll("img")[3].setAttribute("src", source5);
//a2
user2.addEventListener("click", audio1.play());
}


