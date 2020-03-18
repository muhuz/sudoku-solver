
function check_row(row, col, n) {
    for (let j = 0; j <= 8; j++) {
        if (j != col) {
            if ((board.grid[row][j].getNumber() == n) && (board.grid[row][j].getNumber() != null)) {
                board.grid[row][j].element.classList.add('sudoku-conflict');
                board.grid[row][col].element.classList.add('sudoku-conflict');
            }
        }
    }
}

function check_column(row, col, n) {
    for (let i = 0; i <= 8; i++) {
        if (i != row) {
            if (board.grid[i][col].getNumber() == n) {
                board.grid[i][col].element.classList.add('sudoku-conflict');
                board.grid[row][col].element.classList.add('sudoku-conflict');
            }
        }
    }
}

// function check_square() {

// }

// Notify Illegal Moves
document.addEventListener("keydown", function(e) {
    if (document.activeElement.className == 'square') {
        let active_row = document.activeElement.row;
        let active_col = document.activeElement.col;
        let active_num = document.activeElement.value;
        check_row(active_row, active_col, active_num);
    }
});