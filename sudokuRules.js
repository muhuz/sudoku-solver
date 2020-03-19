
function check_row(row, col, n, conflicts) {
    for (let j = 0; j <= 8; j++) {
        if (j != col) {
            if ((board.getNumber(row, j) == n) && (board.getNumber(row, j) != null)) {
                conflicts.push(board.getElement(row, j));
            }
        }
    }
}

function check_column(row, col, n, conflicts) {
    for (let i = 0; i <= 8; i++) {
        if (i != row) {
            if (board.getNumber(i, col) == n) {
                conflicts.push(board.getElement(i, col));
            }
        }
    }
}

function check_square(row, col, n, conflicts) {
    let starting_row = Math.floor(row/3);
    let starting_col = Math.floor(col/3);
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            if (3*starting_row + i != row && 3*starting_col + j != col) {
                if (board.getNumber(3*starting_row + i, 3*starting_col + j) == n) {
                    conflicts.push(board.getElement(3*starting_row + i, 3*starting_col + j))
                }
            }
        }
    }
}

// function applySudokuConflict(element) {
//     console.log("finding conflicts")
//     let active_row = element.row;
//     let active_col = element.col;
//     let active_num = element.value;
//     let conflicts = [];
//     check_row(active_row, active_col, active_num, conflicts); 
//     check_column(active_row, active_col, active_num, conflicts);
//     check_square(active_row, active_col, active_num, conflicts);
//     if (conflicts.length != 0) {
//         conflicts.map(s => s.classList.add('sudoku-conflict'));
//         applySudokuConflict(document.activeElement)
//     }
// }

// function setSudokuFilter(textbox) {
//     textbox.addEventListener("keydown", function(e) {
//         if (/^[1-9]$/.test(e.key)) {
//             this.value = e.key;
//             console.log("hello");
//             applySudokuConflict(this);
//             e.preventDefault();
            
//         } else if (e.key != 'Backspace'){
//             e.preventDefault();
//         }
//     });
// }

// // Notify Illegal Moves
// document.addEventListener("keydown", function(e) {
//     if (document.activeElement.className == 'square') {
//         let active_row = document.activeElement.row;
//         let active_col = document.activeElement.col;
//         let active_num = document.activeElement.value;
//         let conflicts = [];
//         check_row(active_row, active_col, active_num, conflicts); 
//         check_column(active_row, active_col, active_num, conflicts);
//         check_square(active_row, active_col, active_num, conflicts);
//         if (conflicts.length != 0) {
//             conflicts.map(s => applySudokuConflict(s));
//             applySudokuConflict(document.activeElement)
//         }
//     }
// });