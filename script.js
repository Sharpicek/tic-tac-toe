const ticTacToe = (function Gameboard() {
    const gameboard = [];

    for (let i = 0; i < 3; i ++) {
        gameboard.push(['-', '-', '-']);
    }

    const getBoard = () => gameboard;

    function putToken(player, row, column) {
        if (player == 1) {
            gameboard[row][column] = 'X'
        } else {
            gameboard[row][column] = 'O'
        }
        console.log(getBoard());
    }
    return {
        getBoard,
        putToken
    }
})();

console.log("Starting gameboard: ", ticTacToe.getBoard());





