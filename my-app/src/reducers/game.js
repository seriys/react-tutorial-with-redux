import {calculateWinner} from '../components/Game'

const defaultGameState = {
    history: [{
        squares: Array(9).fill(null),
        position: null
    }],
    stepNumber: 0,
    xIsNext: true,
};

const game = (state = defaultGameState, action) => {
    switch (action.type) {
        case 'ADD_MOVE':
            const history = state.history.slice(0, state.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            if (calculateWinner(squares) || squares[action.position]) {
                return state;
            }
            squares[action.position] = state.xIsNext ? 'X' : 'O';
            return {
                history: history.concat([{
                    squares: squares,
                    position: action.position,
                }]),
                stepNumber: history.length,
                xIsNext: !state.xIsNext,
            };
        case 'JUMP_TO':
            return {
                history: state.history.slice(),
                stepNumber: action.step,
                xIsNext: (action.step % 2) === 0,
            };
        default:
            return state
    }
};

export default game
