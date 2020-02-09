var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

// colour inputs match the background generated on the first page load
setGradient();

function setGradient(){
    body.style.background= "linear-gradient(to right,"+color1.value+" , "+color2.value+")";
    css.innerHTML= body.style.background;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input",setGradient );

function makeRandomColor(){
    var letters = "0123456789ABCDEF";
    var color="#";

    for(var i = 0 ; i<6 ; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

button.addEventListener("click",function(){
    var randomColor1 = makeRandomColor();
    var randomColor2 = makeRandomColor();

    body.style.background= "linear-gradient(to right,"+randomColor1+" , "+randomColor2+")";
    css.innerHTML= body.style.background;
})