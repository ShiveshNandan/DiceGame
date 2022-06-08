var num1 = Math.floor(Math.random()*6 + 1);
console.log(num1);
var num2 = Math.floor(Math.random()*6 + 1);
console.log(num2);
// document.getElementsByClassName("qw")[0].style.color="red";
// document.querySelector(".box .boxx h2").style.color="red";

// player names
// var name1 = prompt("What is first player's name? ");
// var name2 = prompt("What is second player's name? ");
// document.getElementsByClassName("player1")[0].innerHTML=name1;
// document.getElementsByClassName("player2")[0].innerHTML=name2;

// for player 1
if (num1 ===1) {
    document.getElementsByClassName("d11")[0].style.display="flex";
}
else if (num1 ===2) {
    document.getElementsByClassName("d12")[0].style.display="flex";
}
else if (num1 ===3) {
    document.getElementsByClassName("d13")[0].style.display="flex";
}
else if (num1 ===4) {
    document.getElementsByClassName("d14")[0].style.display="flex";
}
else if (num1 ===5) {
    document.getElementsByClassName("d15")[0].style.display="flex";
}
else if (num1 ===6) {
    document.getElementsByClassName("d16")[0].style.display="flex";
}

// for player 2
if (num2 ===1) {
    document.getElementsByClassName("d21")[0].style.display="flex";
}
else if (num2 ===2) {
    document.getElementsByClassName("d22")[0].style.display="flex";
}
else if (num2 ===3) {
    document.getElementsByClassName("d23")[0].style.display="flex";
}
else if (num2 ===4) {
    document.getElementsByClassName("d24")[0].style.display="flex";
}
else if (num2 ===5) {
    document.getElementsByClassName("d25")[0].style.display="flex";
}
else if (num2 ===6) {
    document.getElementsByClassName("d26")[0].style.display="flex";
}


// for the winner
 if (num1>num2) {
    document.getElementsByClassName("player1")[0].style.color="#EEEEEE";
    document.getElementsByClassName("boxx1")[0].style.marginTop="0px";
    document.getElementsByClassName("giphy-embed1")[0].style.display="flex";
    document.getElementById("p1").style.display="flex";
    console.log("player 1 is winner");

}
else if (num1<num2) {
    document.getElementsByClassName("player2")[0].style.color="#EEEEEE";
    document.getElementsByClassName("boxx2")[0].style.marginTop="0px";
    document.getElementsByClassName("giphy-embed2")[0].style.display="flex";
    document.getElementById("p2").style.display="flex";
    console.log("player 2 is winner");
}
else if (num1===num2) {
    document.getElementById("draw").style.display="flex";
    console.log("draw");
}
