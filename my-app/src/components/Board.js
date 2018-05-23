import React from "react";
import Square from './Square'
import PropTypes from 'prop-types'

const Board  = ({ onClick, squares }) => {
    const renderSquare = (i) => {
        return <Square
            value={squares[i]}
            onClick={() => onClick(i)}
        />;
    };
    const renderBoardRow = (i) => {
        let list = [];
        for (let j = 0; j < 3; j++) {
            list.push(renderSquare(i * 3 + j))
        }
        return list;
    };

    let list = [];
    for (let i = 0; i < 3; i++) {
        list.push(
            <div className="board-row">
                {renderBoardRow(i)}
            </div>)
    }

    return (
        <div className="game-board">
            <div>
                {list}
            </div>
        </div>
    );
};

Board.propTypes = {
    onClick: PropTypes.func.isRequired,
    squares: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Board
