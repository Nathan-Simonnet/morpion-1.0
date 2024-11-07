// datas into object

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

let currentGameIndex = 0;
let currentPlayer = "X";
let playerXGame = [];
let playerOGame = [];

function pushScoreIntoGameArray(squarreNumber) {
    currentPlayer === "X" ? playerXGame.push(squarreNumber) : playerOGame.push(squarreNumber);
}

function switchPlayer() {
    currentPlayer === "X" ? currentPlayer = "O" : currentPlayer = "X"
}

const messageContainer = document.querySelector('.message-container')
const messageDisplay = document.querySelector('.message-display')
function messageDisplayer(message) {
    messageDisplay.textContent = message;
}

const grid = document.querySelector('.grid');

function gridHandler(e) {

    if (e.target.classList.contains("marker")) {
        const squarreElement = e.target;
        squarreElement.textContent = currentPlayer;
        squarreElement.classList.add('clicked')
        const squarreNumber = squarreElement.dataset.number;
        // console.log(squarreElement, squarreNumber);
        console.log(currentPlayer)

        pushScoreIntoGameArray(squarreNumber);
        switchPlayer();
        messageDisplayer(`${currentPlayer}'s turn`)
        currentGameIndex++;

        if (currentGameIndex == 9) {
            messageDisplayer("Press space to restart");
            console.log(playerXGame, playerOGame)
        }
    }
}

grid.addEventListener('click', gridHandler);
window.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        document.querySelectorAll('.marker').forEach((mark) => {
            mark.textContent = "";
            mark.classList.remove('clicked');
            messageDisplayer(`${currentPlayer}'s turn`);
            currentGameIndex = 0;
            playerXGame = [];
            playerOGame = [];
        });
    }
});































