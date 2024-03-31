const gameboxes = document.querySelectorAll(".gamebox");
const playText = document.getElementById("game-text");
const restartBtn = document.getElementById("restart");

const spaces = [];
const XPlayer = "X"; 
const OPlayer = "O";
let currentPlayer;

function handleClick(e) {
    const id = e.target.id;
    if (!spaces[id]) {
        spaces[id] = currentPlayer;

        // console.log('[' + spaces.slice(0, 3) + ']\n[' + spaces.slice(3, 6) + ']\n[' + spaces.slice(6) + ']');
        e.target.innerText = currentPlayer;

        if (playerWon(currentPlayer)) {
            const winningAlert = document.createElement("p");
            winningAlert.setAttribute("id", "winning-text");
            winningAlert.innerText = `${currentPlayer} HAS WON!`;
            playText.appendChild(winningAlert);

            setTimeout(() => {
                restart();
            }, 4000);
            return;
        }
        currentPlayer = currentPlayer === OPlayer ? XPlayer : OPlayer;
    }
}

gameboxes.forEach((gamebox) => {
    gamebox.addEventListener("click", handleClick);
});

const playerWon = (player) => {
    if (spaces[0] === player) {
        if (spaces[1] === player && spaces[2] === player) return true;
        if (spaces[3] === player && spaces[6] === player) return true;
        if (spaces[4] === player && spaces[8] === player) return true;
    }
    if (spaces[8] === player) {
        if (spaces[2] === player && spaces[5] === player) return true;
        if (spaces[6] === player && spaces[7] === player) return true;
    }
    if (spaces[4] === player) {
        if (spaces[1] === player && spaces[7] === player) return true;
        if (spaces[3] === player && spaces[5] === player) return true;
        if (spaces[2] === player && spaces[6] === player) return true;
    }
};

const restart = () => {
    spaces.forEach((space, index) => {
        console.log(space);
        spaces[index] = null;
    });
    gameboxes.forEach((gamebox) => {
        gamebox.innerText = "";
    });
    playText.innerHTML = `TIC TAC TOE`;
    currentPlayer = OPlayer;
};

restartBtn.addEventListener("click", restart);

restart();
