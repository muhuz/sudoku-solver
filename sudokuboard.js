
var NUM_ROWS = 9;
var NUM_COLS = 9;

/*
Two way data binding Square
*/

// restrict the input to only 1-9
function setSudokuFilter(textbox) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
      textbox.addEventListener(event, function() {
        if (/^[1-9]$/.test(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = "";
        }
      });
    });
  }

class Square {
    constructor(element, x, y, number) {
        this.element = element;
        this.element.value = number;
        this.element.addEventListener("change", this, false);
        setSudokuFilter(this.element);
        this.x = x;
        this.y = y;
        this.number = number;
    }

    handleEvent(event) {
        switch (event.type) {
            case "change":
                this.change(this.element.value);
        };
    }

    change(number) {
        // Change only if it is 1-9
        if (number > 1 & number < 9 ) {
            this.number = number;
            this.element.value = number;
        }
    }
};

class SudokuBoard {
    constructor(table, num_rows, num_cols) {
        this.table = table;
        this.grid = [];
        for (let i=0; i<num_rows; i++) {
            this.grid[i] = new Array(num_cols);
        };

        for (var i = 0; i < num_rows; i++) {
            let row = this.table.insertRow();
            for (let j = 0; j < num_cols; j++) {
                let cell = row.insertCell();
                let input = document.createElement('input');
                input.className = "square"
                this.grid[i][j] = new Square(input, i, j, null);
                cell.appendChild(input);
            }
        }
    }
};

var puzzle_table = document.getElementById('PuzzleBoard');
var board = new SudokuBoard(puzzle_table, NUM_ROWS, NUM_COLS);

