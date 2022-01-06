// Read all of my html before loading my js
document.addEventListener('DOMContentLoaded', () => {
	const grid = document.querySelector('.grid');
	const width = 8;
	const squares = [];
	const candyColors = ['red', 'yellow', 'orange', 'purple', 'green', 'blue'];
	let random;

	// Create Board
	function createBoard() {
		for (let i = 0; i < width * width; i++) {
			const square = document.createElement('div');
			square.setAttribute('draggable', true);
			square.setAttribute('id', i);
			randomColor = Math.floor(Math.random() * candyColors.length);
			square.style.backgroundColor = candyColors[randomColor];
			grid.appendChild(square);
			squares.push(square);
		}
	}

	createBoard();

	let colorBeingDragged;
	let colorBeingReplaced;
	let squareIdBeingDragged;
	let squareIdBeingReplaced;

	// Drag the candies, in built drag listeners
	squares.forEach((square) => square.addEventListener('dragstart', dragStart));
	squares.forEach((square) => square.addEventListener('dragend', dragEnd));
	squares.forEach((square) => square.addEventListener('dragover', dragOver));
	squares.forEach((square) => square.addEventListener('dragenter', dragEnter));
	squares.forEach((square) => square.addEventListener('dragleave', dragLeave));
	squares.forEach((square) => square.addEventListener('drop', dragDrop));

	function dragStart() {
		colorBeingDragged = this.style.backgroundColor;
		squareIdBeingDragged = parseInt(this.id);

		console.log(colorBeingDragged);
		console.log(this.id, 'dragstart');
	}

	function dragOver(e) {
		e.preventDefault();
		console.log(this.id, 'dragsOver');
	}

	function dragEnter(e) {
		e.preventDefault();
		console.log(this.id, 'dragEnter');
	}

	function dragLeave() {
		console.log(this.id, 'dragLeave');
	}

	function dragDrop() {
		console.log(this.id, 'dragDrop');
		colorBeingReplaced = this.style.backgroundColor;
		squareIdBeingReplaced = parseInt(this.id);
		this.style.backgroundColor = colorBeingDragged;
		squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced;
	}

	function dragEnd() {
		console.log(this.id, 'dragEnd');

		let validMoves = [
			squareIdBeingDragged - 1,
			squareIdBeingDragged - width,
			squareIdBeingDragged + 1,
			squareIdBeingDragged + width,
		];

		let validMove = validMoves.includes(squareIdBeingReplaced);

		if (squareIdBeingReplaced && validMove) {
			squareIdBeingReplaced = null;
		} else if (squareIdBeingReplaced && !validMove) {
			squares[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced;
			squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged;
		} else {
			// out of grid
			squares[squareIdBeingDragged].style.borderColor = colorBeingDragged;
		}
	}

	// Checking for matches
	// Check for row of Three
	function checkRowForThree() {
		for (let i = 0; i < 61; i++) {
			let rowOfThree = [i, i + 1, i + 2];
			let decidedColor = squares[i].style.backgroundColor;
		}
	}
});
