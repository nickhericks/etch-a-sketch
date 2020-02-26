// Select the elements on the page - canvas, shake button
const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext('2d');

const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 20;


// Setup our canvas for drawing

// Make a variable called height and width from the same properties on our canvas
// const width = canvas.width;
// const height = canvas.height;
const { width, height } = canvas;
// console.log(width, height);

// create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);



ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
function draw( { key } ) {
	// increment the hue
	hue += 6;
	// update color of
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;


	console.log(key);
	ctx.beginPath();
	ctx.moveTo(x, y);
	
	switch (key) {
		case 'ArrowUp':
			y -= MOVE_AMOUNT;
			break;
		case 'ArrowDown':
			y += MOVE_AMOUNT;
			break;
		case 'ArrowRight':
			x += MOVE_AMOUNT;
			break;
		case 'ArrowLeft':
			x -= MOVE_AMOUNT;
			break;
		default:
			break;
	}

	ctx.lineTo(x, y);
	ctx.stroke();
}


// Write a handler for the keys
function handleKey(e) {
	if(e.key.includes('Arrow')) {
		e.preventDefault();
		draw({ key: e.key });
		// console.log(e.key);

	}
}


// clear/shake function



// Listen for arrow keys
window.addEventListener('keydown', handleKey);