import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import Square from "./Square";
import {
    calculateWinner,
    handleClick,
    selectSquares,
} from "../store/boardSlice";

const Board: FC = (): JSX.Element => {
    const squares = useSelector(selectSquares);
    const dispatch = useDispatch();
    const winner = calculateWinner(squares);

    const renderSquare = (i: number) => (
        <Square value={squares[i]} onClick={() => dispatch(handleClick(i))} />
    );

    const renderResult = (): JSX.Element | null => {
        // if (winner === 'Draw') {
        //     return <div className="result">It's a draw!</div>
        // } else if (winner) {
        //     return <div className="result">Winner: {winner}!</div>
        // }
        
        switch (winner) {
            case 'Draw':
                return <div className="result">It's a draw!</div>
            case 'X':
            case 'O':
                return <div className="result">Winner: {winner}!</div>    
        }
        return null;
    };

    const restartGame = () => dispatch(handleClick(-1));

    return (
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            {/* {renderResult()} */}
            {winner && (
                winner === 'Draw' ?
                <div className="result">It's a draw!</div> :
                <div className="result">Winner: {winner}!</div>
            )}
            <button className="restart-button" onClick={restartGame}>
                Restart Game
            </button>
        </div>
    );
};

export default Board;
