// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState}  from "react";
import GameCircle from "./GameCircle.jsx";
import '../Game.css'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import isWinner, {getComputerMove, isDraw} from "../helper.js";
import {
    GAME_STATE_DRAW,
    GAME_STATE_PLAYING,
    GAME_STATE_WIN,
    NO_PLAYER,
    NUMBER_OF_CIRCLES,
    PLAYER_1,
    PLAYER_2
} from "../Constants.js";


const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
    const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
    const [winPlayer, setWinPlayer] = useState(NO_PLAYER)

    useEffect(() => {
        initGame();
    }, [])

    const initGame = () => {
        setGameBoard(Array(16).fill(NO_PLAYER));
        setCurrentPlayer(PLAYER_1);
        setGameState(GAME_STATE_PLAYING);
        setWinPlayer(NO_PLAYER);
    }
    ;
    const initBoard = () => {
        let circles = [];
        for (let i = 1; i <= NUMBER_OF_CIRCLES; i++) {
            circles.push(renderCircle(i))
        }
        return circles;
    }

    const circleClicked = (id) => {
        if (gameBoard[id-1] !== NO_PLAYER) return;
        if (gameState !== GAME_STATE_PLAYING) return;
        if (isWinner(gameBoard, id-1, currentPlayer)) {
            setGameState(GAME_STATE_WIN);
            setWinPlayer(currentPlayer);
        }
        else if (isDraw(gameBoard, id-1, currentPlayer)) {
            setGameState(GAME_STATE_DRAW);
            setWinPlayer(NO_PLAYER);
        }

        setGameBoard(prevState => {
            prevState[id-1] = currentPlayer
            return prevState
        });
        let board = [...gameBoard]
        board[id-1] = currentPlayer;
        console.log(board);
       setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    }

    const renderCircle = (id) => {
        return <GameCircle key={id} id={id} className={`player-${gameBoard[id-1]}`} onCircleClicked={circleClicked}/>
    }

    const newGameClicked = () => {
        initGame()
    };

    const suggestMove = () => {
        circleClicked(getComputerMove(gameBoard));
    }

    return (
        <>
            <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer} />
            <div className="gameBoard">
                {initBoard()}
            </div>
            <Footer newGameClickEvent={newGameClicked} suggestClickEvent={suggestMove}/>
        </>
    )
}

export default GameBoard;