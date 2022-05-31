// variable: A location to store values, that may change over time
var canvas; // creating a new variable called canvas
var draw;
const UNIT = 7; //Declaring that a unit is ten pixels
window.onload = init; // When the webpage is loaded, run the init function
//function: a set of instructions that could be used multiple times
function init() { // Setup 
   
    canvas = document.getElementById("myCanvas"); // Linking the canvas element from Html to canvas in JS
    draw = canvas.getContext('2d'); // Declaring the draw variable is from 2D canvas  c
    canvas.width = 1300;
    canvas.height = 600;
    
}
function erase() {
   draw.clearRect(0,0,canvas.width,canvas.height);
}


function incrementScale() {


}

