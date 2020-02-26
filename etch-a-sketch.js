// Select the elements on the page - canvas, shake button
const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext('2d');

const shakeButton = document.querySelector('.shake');


// Setup our canvas for drawing

// Make a variable called height and width from the same properties on our canvas
// const width = canvas.width;
// const height = canvas.height;
const { width, height } = canvas;
console.log(width, height);

// create random x and y starting points on the canvas
const x = Math.floor(Math.random() * width);
const y = Math.floor(Math.random() * height);
console.log(x);
console.log(y);


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function



// Write a handler for the keys
function handleKey(e) {
	e.preventDefault();
	console.log('Handling key');
}


// clear/shake function



// Listen for arrow keys
window.addEventListener('keydown', handleKey);