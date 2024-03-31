// const gameboxes = document.querySelectorAll(".gamebox");
// const playText = document.getElementById("game-text");
// const restartBtn = document.getElementById("restart");

// const spaces = [];
// const XPlayer = "X"; 
// const OPlayer = "O";
// let currentPlayer;

// function handleClick(e) {
//     const id = e.target.id;
//     if (!spaces[id]) {
//         spaces[id] = currentPlayer;

//         // console.log('[' + spaces.slice(0, 3) + ']\n[' + spaces.slice(3, 6) + ']\n[' + spaces.slice(6) + ']');
//         e.target.innerText = currentPlayer;

//         if (playerWon(currentPlayer)) {
//             const winningAlert = document.createElement("p");
//             winningAlert.setAttribute("id", "winning-text");
//             winningAlert.innerText = `${currentPlayer} HAS WON!`;
//             playText.appendChild(winningAlert);

//             setTimeout(() => {
//                 restart();
//             }, 4000);
//             return;
//         }
//         currentPlayer = currentPlayer === OPlayer ? XPlayer : OPlayer;
//     }
// }

// gameboxes.forEach((gamebox) => {
//     gamebox.addEventListener("click", handleClick);
// });

// const playerWon = (player) => {
//     if (spaces[0] === player) {
//         if (spaces[1] === player && spaces[2] === player) return true;
//         if (spaces[3] === player && spaces[6] === player) return true;
//         if (spaces[4] === player && spaces[8] === player) return true;
//     }
//     if (spaces[8] === player) {
//         if (spaces[2] === player && spaces[5] === player) return true;
//         if (spaces[6] === player && spaces[7] === player) return true;
//     }
//     if (spaces[4] === player) {
//         if (spaces[1] === player && spaces[7] === player) return true;
//         if (spaces[3] === player && spaces[5] === player) return true;
//         if (spaces[2] === player && spaces[6] === player) return true;
//     }
// };

// const restart = () => {
//     spaces.forEach((space, index) => {
//         console.log(space);
//         spaces[index] = null;
//     });
//     gameboxes.forEach((gamebox) => {
//         gamebox.innerText = "";
//     });
//     playText.innerHTML = `TIC TAC TOE`;
//     currentPlayer = OPlayer;
// };

// restartBtn.addEventListener("click", restart);

// restart();

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
            displayResult(`${currentPlayer} HAS WON!`);
            setTimeout(() => {
                restart();
            }, 4000);
            return;
        } else if (isDraw()) {
            displayResult("It's a Draw!");
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
    playText.innerHTML = `TIC TAC TOE`;
    currentPlayer = OPlayer;
};

restartBtn.addEventListener("click", restart);

restart();

