// eslint-disable-next-line no-unused-vars
import React, {useState}  from "react";
import GameCircle from "./GameCircle.jsx";
import '../Game.css'

const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;
const NUMBER_OF_CIRCLES = 16;

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1)

    const initBoard = () => {
        let circles = [];
        for (let i = 1; i <= NUMBER_OF_CIRCLES; i++) {
            circles.push(renderCircle(i))
        }
        return circles;
    }

    const circleClicked = (id) => {
        setGameBoard((prevState) => {
            prevState[id-1] = currentPlayer
            return prevState
       });
        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    }

    const renderCircle = (id) => {
        return <GameCircle key={id} id={id} className={`player-${gameBoard[id-1]}`} onCircleClicked={circleClicked}/>
    }

    return (
        <div className="gameBoard">
            {initBoard()}
        </div>
    )
}

export default GameBoard;