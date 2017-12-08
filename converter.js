// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F / 32C the color of the converted temperature should be red.
// If the temperature is less than 32F / 0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green
 
// make variables to target the output for converting the tempature
let tempInput = document.getElementById("tempInput");
let c = document.getElementById("c");
let f = document.getElementById("f");
let convert = document.getElementById('convert');
let clear = document.getElementById("clear");
let tempDisplay = document.getElementById("tempDisplay");

// assign a fuction for what happens when the button is clicked
clear.addEventListener("click", () => {
    tempInput.value = '';
    c.checked = false;
    f.checked = false;
});

convert.addEventListener("click", () => {
    if (c.checked) { 
        console.log("cel")
        tempInput.value = convertToC()
    }
    else if (f.checked) {
        console.log("far")
        tempInput.value = convertToF()
    }
    
});



// function converting the temapture to C
function convertToC() {
    console.log(typeof tempInput.value)
    tempInput = (+tempInput.value - 32) / 1.8;
    tempDisplay.innerHTML = tempInput + " C";
}

//  function converting the temapture to F
function convertToF() {
    console.log(typeof tempInput.value)
    tempInput = (+tempInput.value * 1.8) + 32;
    tempDisplay.innerHTML = tempInput + " F";
}































// function toCelsius() {

// }

// function toFahrenheit() {

// }

// // Get a reference to the button element in the DOM
// var button = document.getElementById("converter");

// // This function should determine which conversion should
// // happen based on which radio button is selected.
// function determineConverter(clickEvent) {
//     console.log("event", clickEvent);
// }

// // Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter);