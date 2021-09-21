import React, { useState } from 'react'
import { calculateWinner } from '../helpers';
import Board from './Board';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i => {
        // shallow copy of board
        const boardCopy = [...board];
        // if user click an unoccupied square or if game is won return
        if (winner || boardCopy[i]) return;
        // put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O' ;
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const jumpTo = () => {
        
    }

    const renderMoves = () => (
        <button onClick={() => setBoard(Array(9).fill(null))}>
            start game
        </button>  
    )

    return(
        <>
            <Board squares={board} onClick={handleClick} />
            <div className="board">
                <p>
                    {winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
                </p>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game;
