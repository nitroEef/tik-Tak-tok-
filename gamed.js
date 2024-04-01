const gameboxes = document.querySelectorAll(".gamebox");
const playText = document.getElementById("game-text");
const restartBtn = document.getElementById("restart");

const spaces = Array(9).fill(null);
const XPlayer = "X"; 
const OPlayer = "O";
let currentPlayer = OPlayer;

function handleClick(e) {
    const id = e.target.id;
    if (!spaces[id]) {
        spaces[id] = currentPlayer;

        e.target.innerText = currentPlayer;
        

        if (playerWon(currentPlayer)) {
            displayResult(`${currentPlayer} HAS WON!!!!!🎈🎈🎈`);
            setTimeout(() => {
                restart();
            }, 4000);
            return;
        } else if (isDraw()) {
            displayResult("It's a Draw!😏😏");
            setTimeout(() => {
                restart();
            }, 4000);

            return;
        }

        currentPlayer = currentPlayer === OPlayer ? XPlayer : OPlayer;
    }

}

function displayResult(message) {
    const resultAlert = document.createElement("p");
    resultAlert.setAttribute("id", "result-text");
    resultAlert.innerText = message;
    playText.appendChild(resultAlert);
    
}

function isDraw() {
    return spaces.every((space) => space !== null);
}

gameboxes.forEach((gamebox) => {
    gamebox.addEventListener("click", handleClick);
});

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function playerWon(player) {
    return winningConditions.some((condition) => {
        return condition.every((index) => spaces[index] === player);
    });
}

const restart = () => {
    spaces.fill(null);
    gameboxes.forEach((gamebox) => {
        gamebox.innerText = "";
    });
    // playText.innerHTML = `TIC TAC TOE`;
    currentPlayer = OPlayer;
};

restartBtn.addEventListener("click", restart);

const restarts = () => {
    spaces.fill(null);
    gameboxes.forEach((gamebox) => {
        gamebox.innerText = "";
    });
    playText.innerHTML = `TIC TAC TOE`; // Reset playText content
    currentPlayer = OPlayer;

    // Remove result message if it exists
    const resultAlert = document.getElementById("result-text");
    if (resultAlert) {
        resultAlert.remove();
    }
};


restart();
