const buttons = document.querySelectorAll(".button")
const body =  document.querySelector("body")
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener("click",function (event){
        // console.log(event);
        // console.log(event.target);
        if(event.target.id === "Grey"){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === "White"){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === "Blue"){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === "Yellow"){
            body.style.backgroundColor = event.target.id
        }
    })
});