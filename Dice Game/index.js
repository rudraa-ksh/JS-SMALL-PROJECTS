let randomNumber =  Math.round(Math.random()*5)+1;
let randomImage = "./Images/dice"+randomNumber+".png";
let image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src",randomImage)

let randomNumber2 =  Math.round(Math.random()*5)+1;
let randomImage2 = "./Images/dice"+randomNumber2+".png";
let image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src",randomImage2)

if(randomNumber>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins!"
}
else if(randomNumber<randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins!"
}
else{
    document.querySelector("h1").textContent = "Draw!"
}