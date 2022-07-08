let randomNumerGen = () => {
    let n = Math.random();
    n = n * 6;
    n = Math.floor(n) + 1;
    return n;
}

const imgs = [0,"images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

let rn1 = randomNumerGen();
let rn2 = randomNumerGen();
console.log(rn1);
console.log(rn2);

let p1Img = document.getElementById("p1");
let p2Img = document.getElementById("p2");
let heading = document.getElementById("heading");

p1Img.setAttribute("src", imgs[rn1]);
p2Img.setAttribute("src", imgs[rn2]);

if(rn1 > rn2){
    heading.innerHTML = "Player 1 Wins!"
}
else if(rn2 > rn1){
    heading.innerHTML = "Player 2 Wins!"
}
else{
    heading.innerHTML = "It's a Tie!"
}