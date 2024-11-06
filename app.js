

const currentGame = ["", "", "", "", "", "", "", "", ""];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


let currentPlayer = "X";

function switchPlayer() {
    currentPlayer === "X" ? currentPlayer = "O" : currentPlayer = "X"
}

const grid = document.querySelector('.grid');
const square = document.querySelector('.square');
const marker = document.querySelector('.marker');

console.log(grid, square, marker)


function gridHandler(e) {
    if(e.target.classList.contains("marker")){
        const squarreElement = e.target;
        const squarreNumber = squarreElement.dataset.number;
        squarreElement.classList.add('clicked')
        console.log(squarreElement, squarreNumber);
        squarreElement.textContent = currentPlayer;
        switchPlayer()
    }
}

grid.addEventListener('click', gridHandler);

