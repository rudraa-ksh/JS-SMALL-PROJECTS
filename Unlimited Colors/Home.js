const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i <6; i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
};
let intervalID
document.getElementById("start").addEventListener("click",function () {
    if (!intervalID) {
        intervalID = setInterval(changeColor,1000);
    }
    function changeColor() {
        document.body.style.backgroundColor = randomColor()
    }    
})

document.getElementById("stop").addEventListener("click",function () {
    clearInterval(intervalID)
    intervalID =null;
})