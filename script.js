// let bgContainer = document.getElementById("bg");

// let colorNameEl = document.getElementById("colorName");

// function redBtn(){
//     bgContainer.style.backgroundColor = "red";
//     colorNameEl.textContent = "red";
// }

// function blueBtn(){
//     bgContainer.style.backgroundColor = "blue";
//     colorNameEl.textContent = "blue";
// }

// function greenBtn(){
//     bgContainer.style.backgroundColor = "green";
//     colorNameEl.textContent = "green";
// }

// function yellowBtn(){
//     bgContainer.style.backgroundColor = "yellow";
//     colorNameEl.textContent = "yellow";
// }

//----------------------------------------------------------

let bgContainer = document.getElementById("bg");
let colorNameEl = document.getElementById("colorName");

function changeColor(color) {
  bgContainer.style.backgroundColor = color;
  colorNameEl.textContent = color;
}

function redBtn() { changeColor("red"); }
function blueBtn() { changeColor("blue"); }
function greenBtn() { changeColor("green"); }
function yellowBtn() { changeColor("yellow"); }