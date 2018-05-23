import React from 'react';
import Board from './Board'
import PropTypes from 'prop-types';

const Game = ({history, step, xIsNext, onAddMoveClick, onJumpToClick}) => {
    const current = history[step];
    const winner = calculateWinner(current.squares);

    const getLoc = (position) => {
        return {
            col: position % 3 + 1,
            row: Math.floor(position / 3) + 1
        }
    };

    const moves = history.map((step, move) => {
        const loc = getLoc(step.position);
        const desc = move ?
            'Go to move #' + move + ' location #(' + loc.col + ', ' + loc.row + ')':
            'Go to game start';
        const isLatest = history.length - 1 === move;
        return(
            <li key={move}>
                <button onClick={() => onJumpToClick(move)}>{isLatest ? <b>{desc}</b> : desc}</button>
            </li>
        )
    });

    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={(position) => onAddMoveClick(position)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    )
};

Game.propTypes = {
    history: PropTypes.arrayOf({
        squares: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        position: PropTypes.number.isRequired
    }).isRequired,
    step: PropTypes.number.isRequired,
    xIsNext: PropTypes.bool.isRequired,
    onAddMoveClick: PropTypes.func.isRequired,
    onJumpToClick: PropTypes.func.isRequired,
};

export const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i<lines.length; i++) {
        const [a,b,c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export default Game
