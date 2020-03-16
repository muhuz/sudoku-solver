
var NUM_ROWS = 9;
var NUM_COLS = 9;

/*
Two way data binding Square
*/

// restrict the input to only 1-9
function setSudokuFilter(textbox) {
    textbox.addEventListener("keydown", function(e) {
        if (/^[1-9]$/.test(e.key)) {
            this.value = e.key;
            e.preventDefault();
        } else if (e.key != 'Backspace'){
            e.preventDefault();
        }
    });
}

// Add arrow key navigation to document when square is selected
document.addEventListener("keydown", function(e) {
    if (document.activeElement.className == 'square') {
        let active_x = document.activeElement.x;
        let active_y = document.activeElement.y;
        if (e.keyCode == '37') {
            // left arrow
            if (active_y > 0) {
                board.grid[active_x][active_y - 1].element.focus();
            }
            else {
                board.grid[active_x][8].element.focus();
            }
        } else if (e.keyCode == '38') {
            // up arrow
            if (active_x > 0) {
                board.grid[active_x - 1][active_y].element.focus();
            }
            else {
                board.grid[8][active_y].element.focus();
            }
        } else if (e.keyCode == '39') {
            // right arrow
            if (active_y < 8) {
                board.grid[active_x][active_y + 1].element.focus();
            }
            else {
                board.grid[active_x][0].element.focus();
            }

        } else if (e.keyCode == '40') {
            // down arrow
            if (active_x < 8) {
                board.grid[active_x + 1][active_y].element.focus();
            }
            else {
                board.grid[0][active_y].element.focus();
            }
        }
    }
});

class Square {
    constructor(element, x, y, number) {
        this.element = element;
        this.element.x = x;
        this.element.y = y;
        // this.element.update(number);
        this.element.addEventListener("change", this.handleEvent);
        setSudokuFilter(this.element);
        this.number = number;
    }

    handleEvent(event) {
        switch (event.type) {
            case "change":
                this.change(this.element.textContent);
        };
    }

    change(number) {
        this.number = number;
        this.element.textContent = number;
    }
};

class SudokuBoard {
    constructor(table, num_rows, num_cols) {
        this.table = table;
        this.table.addEventListener("click", function(e) {
            console.log(e.toElement);
            console.log(e.toElement.y);
        })
        this.grid = [];
        for (let i=0; i<num_rows; i++) {
            this.grid[i] = new Array(num_cols);
        };

        // initialize the table
        for (var i = 0; i < num_rows; i++) {
            let row = this.table.insertRow();
            for (let j = 0; j < num_cols; j++) {
                let cell = row.insertCell();
                let input = document.createElement('input');
                input.className = "square";
                this.grid[i][j] = new Square(input, i, j, null);
                cell.appendChild(input);
            }
        };
    }
};

var puzzle_table = document.getElementById('PuzzleBoard');
var board = new SudokuBoard(puzzle_table, NUM_ROWS, NUM_COLS);

