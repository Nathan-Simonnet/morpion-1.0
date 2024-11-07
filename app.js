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

const datasGame = {
    currentGameIndex: 0,
    currentPlayer: "X",
    playerXGame: [],
    playerOGame: []
}

// let datasGame.currentGameIndex = 0;
// let datasGame.currentPlayer = "X";
// let datasGame.playerXGame = [];
// let datasGame.playerOGame = [];

function pushScoreIntoGameArray(squarreNumber) {
    datasGame.currentPlayer === "X" ? datasGame.playerXGame.push(squarreNumber) : datasGame.playerOGame.push(squarreNumber);
}

function switchPlayer() {
    datasGame.currentPlayer === "X" ? datasGame.currentPlayer = "O" : datasGame.currentPlayer = "X"
}

const messageDisplayOne = document.querySelector('.message-display-1');
const messageDisplayTwo = document.querySelector('.message-display-2');
function messageDisplayer(messageOne, messageTwo) {
    if (messageOne) {
        messageDisplayOne.textContent = messageOne;
    }
    if (messageTwo) {
        messageDisplayTwo.textContent = messageTwo;
    }
}

function victoryChecker(playerMarker) {
    let hasVictory = false;
    if (playerMarker) {
        for (let i = 0; i < winningCombinations.length; i++) {
            if (winningCombinations[i].every((el) => playerMarker.includes(el.toString()))) {
                 hasVictory = true;
                 return hasVictory;
            }
        }
    }
    return hasVictory;
}

function victoryDisplayer() {
    console.log("victory")
    document.querySelectorAll('.marker').forEach((mark) => {
        mark.classList.add('clicked');
        messageDisplayer(`${datasGame.currentPlayer} won!`, 'Press space to restart');
        datasGame.currentGameIndex = 0;
        datasGame.playerXGame = [];
        datasGame.playerOGame = [];
    });
    switchPlayer();
}


const grid = document.querySelector('.grid');

function gridHandler(e) {
    if (e.target.classList.contains("marker")) {
        const squarreElement = e.target;
        squarreElement.textContent = datasGame.currentPlayer;
        squarreElement.classList.add('clicked')
        const squarreNumber = squarreElement.dataset.number;

        pushScoreIntoGameArray(squarreNumber);
        if (victoryChecker(datasGame.playerXGame) === true || victoryChecker(datasGame.playerOGame) === true) {
            return victoryDisplayer();
        } else {
            switchPlayer();
            messageDisplayer(`${datasGame.currentPlayer}'s turn`)
            datasGame.currentGameIndex++;
            if (datasGame.currentGameIndex == 9) {
                messageDisplayer("Press space to restart");
            }
        }
    }
}

grid.addEventListener('click', gridHandler);

// Restart
// ============================================================
function restartGame(e) {
    if (e.key === ' ') {
        document.querySelectorAll('.marker').forEach((mark) => {
            mark.textContent = "";
            mark.classList.remove('clicked');
            messageDisplayer(`${datasGame.currentPlayer}'s turn`);
            datasGame.currentGameIndex = 0;
            datasGame.playerXGame = [];
            datasGame.playerOGame = [];
        });
    }
}
window.addEventListener('keydown', restartGame);































