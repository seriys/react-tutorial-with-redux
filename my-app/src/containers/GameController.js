import { connect } from 'react-redux'
import Game from '../components/Game'
import { addMove, jumpTo } from '../actions'

const mapStateToProps = state => {
    return {
        history: state.game.history,
        step: state.game.stepNumber,
        xIsNext: state.game.xIsNext
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddMoveClick: position => {
            dispatch(addMove(position))
        },
        onJumpToClick: step => {
            dispatch(jumpTo(step))
        }
    }
};

const GameController = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);

export default GameController
