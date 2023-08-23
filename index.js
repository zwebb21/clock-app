var a = document.getElementById('msg');
var time = document.getElementById('Print');
// var add = document.getElementById('plus');
// var subtract = document.getElementById('Minus');

time.innerHTML = '__';
a.innerHTML = 'Clock Master';

// Get the element with the id "add"
const addButton = document.getElementById("plus");

// Initialize a counter
let counter = 0;

// Add a click event listener to the "add" element
addButton.addEventListener("click", () => {
  // Increment the counter by 1
  counter += 1;
  
  // Update the text of the "add" element to show the new value
  time.textContent = `${counter}`;
});





// add.addEventListener('click',e => {

// time 

// Get the element with the id "minus"
const minusButton = document.getElementById("Minus");


// Add a click event listener to the "minus" element
minusButton.addEventListener("click", () => {
  // Decrement the counter by 1
  counter -= 1;
  
  // Update the text of the "minus" element to show the new value
  time.textContent = `${counter}`;
});






