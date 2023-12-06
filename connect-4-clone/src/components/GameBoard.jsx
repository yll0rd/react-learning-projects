// eslint-disable-next-line no-unused-vars
import React from "react";
import GameCircle from "./GameCircle.jsx";
import '../Game.css'

const GameBoard = () => {
    const circleClicked = (id) => {
        console.log("Circle clicked " + id);
    }
    return (
        <div className="gameBoard">
            <GameCircle id={1} onCircleClicked={circleClicked}/>
            <GameCircle id={2}/>
            <GameCircle id={3}/>
            <GameCircle id={4}/>
            <GameCircle id={5}/>
            <GameCircle id={6}/>
            <GameCircle id={7}/>
            <GameCircle id={8}/>
            <GameCircle id={9}/>
            <GameCircle id={10}/>
            <GameCircle id={11}/>
            <GameCircle id={12}/>
            <GameCircle id={13}/>
            <GameCircle id={14}/>
            <GameCircle id={15}/>
            <GameCircle id={16}/>
        </div>
    )
}

export default GameBoard;