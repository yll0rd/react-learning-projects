// eslint-disable-next-line no-unused-vars
import React, {useState}  from "react";
import GameCircle from "./GameCircle.jsx";
import '../Game.css'

const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1)
    console.log(gameBoard)
    
    const circleClicked = (id) => {
        console.log("Circle clicked " + id);
        setGameBoard((prevState) => {
            prevState[id-1] = currentPlayer
            return prevState
       });
        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
        console.log(gameBoard)
    }

    const renderCircle = id => {
        return <GameCircle id={id} className={`player-${gameBoard[id-1]}`} onCircleClicked={circleClicked}/>
    }

    return (
        <div className="gameBoard">
            {renderCircle(1)}
            {renderCircle(2)}
            {renderCircle(3)}
            {renderCircle(4)}
            {renderCircle(5)}
            {renderCircle(6)}
            {renderCircle(7)}
            {renderCircle(8)}
            {renderCircle(9)}
            {renderCircle(10)}
            {renderCircle(11)}
            {renderCircle(12)}
            {renderCircle(13)}
            {renderCircle(14)}
            {renderCircle(15)}
            {renderCircle(16)}
        </div>
    )
}

export default GameBoard;