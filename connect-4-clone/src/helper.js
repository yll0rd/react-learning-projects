
export const isWinner = (gameBoard,  index, currentPlayer) => {
    let board = [...gameBoard];
    board[index] = currentPlayer;
    const winLines = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [0, 5, 10, 15],
        [3, 6, 9, 12]
    ];

    for (let i = 0; i < winLines.length; i++) {
        const [c1, c2, c3, c4] = winLines[i];
        if (board[c1] > 0 &&
            board[c1] === board[c2] &&
            board[c2] === board[c3] &&
            board[c3] === board[c4]) {
                return true;
            }
    }
    return false;
}


export const isDraw = (gameBoard, index, currentPlayer) => {
    let board = [...gameBoard];
    board[index] = currentPlayer;

    // for (let i = 0; i < board.length; i++) {
    //     if (board[i] === 0) return false
    // }
    // return true;
    return !board.includes(0)
}

const getPosition = (gameBoard, moveChecks) => {
    for (let check = 0; check < moveChecks.length; check++) {
        for (let i = 0; i < moveChecks[check].max; i += moveChecks[check].step) {
            let series = gameBoard[i + moveChecks[check].indexes[0]].toString() +
                gameBoard[i + moveChecks[check].indexes[1]].toString() +
                gameBoard[i + moveChecks[check].indexes[2]].toString() +
                gameBoard[i + moveChecks[check].indexes[3]].toString();
            console.log(series)
            switch (series) {
                case "1110":
                case "2220":
                    return i + moveChecks[check].indexes[3];
                case "1101":
                case "2202":
                    return i + moveChecks[check].indexes[2];
                case "1011":
                case "2022":
                    return i + moveChecks[check].indexes[1];
                case "0111":
                case "0222":
                    return i + moveChecks[check].indexes[0];
            }
        }
    }
    return -1
}

const getRandomComputerMove = (board) => {
    let validMoves = [];
    for (let i = 1; i <= board.length; i++) {
        if (board[i-1] === 0) validMoves.push(i);
    }
    let rndMove = Math.floor(Math.random() * validMoves.length);
    console.log('Index: ', validMoves[rndMove] - 1);
    return validMoves[rndMove];
}

export const getComputerMove = (gameBoard) => {
    let board = [...gameBoard];
    let moveChecks = [
        // vertical
        {
            indexes: [0, 4, 8, 12],
            max: 4,
            step: 1,
        },
        // horizontal
        {
            indexes: [0, 1, 2, 3],
            max: 16,
            step: 4,
        },
        // diagonal
        {
            indexes: [0, 5, 10, 15],
            step: 16,
            max: 16,
        },
        // diagonal
        {
            indexes: [3, 6, 9, 12],
            step: 16,
            max: 16,
        }
    ]
    let position = getPosition(board, moveChecks);
    if (position > -1) return position + 1;

    return getRandomComputerMove(board)
}

export default isWinner;