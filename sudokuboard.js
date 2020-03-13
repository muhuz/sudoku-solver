
var NUM_ROWS = 9
var NUM_COLS = 9

/*
Test the Two way data binding
*/

function Square(element, x, y, number) {
    this.element = element;
    this.element.value = number;
    this.number = number;
    this.x = x;
    this.y = y;
    element.addEventListener("change", this, false);
};

Square.prototype.handleEvent = function (event) {
    switch (event.type) {
        case "change":
            this.change(this.element.value);
    }
};

Square.prototype.change = function (number) {
    this.number = number;
    this.element.value = number;
};

var square = new Square(document.getElementById("square"), 0, 0, null)
console.log(square.element.value)

var puzzle = document.getElementById('PuzzleBoard');
var backend_puzzle = [];
for (var i=0; i<9; i++) {
    backend_puzzle[i] = new Array(9);
};

function FillPuzzle(puzzle, NUM_ROWS, NUM_COLS) {
    for (var i = 0; i < NUM_ROWS; i++) {
        let row = puzzle.insertRow();
        for (let j = 0; j < NUM_COLS; j++) {
            let cell = row.insertCell();
            let input = document.createElement('input');
            backend_puzzle[i][j] = new Square(input, i, j, null);
            cell.appendChild(input);
        }
    }
};

FillPuzzle(puzzle, 9, 9);