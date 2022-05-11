import { connect } from "react-redux";
import { setValueActionCreater, startGame } from "../../store/reducer";
import Game from "./Game"
const mapStateToProps = (state) => {
    return {
        matrix: state.game.matrix.start,
        values: state.game.values,
        errors: state.game.errors,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setValue(value, indexArr) {
            const action = setValueActionCreater(value, indexArr);
            dispatch(action);
        },
        startGame(){
            dispatch(startGame());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)