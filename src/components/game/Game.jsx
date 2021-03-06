import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setValueActionCreater, startGame } from "../../store/reducer";

const Game = (props) => {
    let navigate = useNavigate()
    const isOver = (props) => {
        if(props.errors >= 3){
            props.dispatch(startGame());
            navigate('/game_over');
        }
    }
    const isWin = (props) => {
        for (const arr of props.matrix) {
            if(arr.includes(0)) {
                return;
            }
        }
        props.dispatch(startGame());
        navigate('/win');
    }
    useEffect(() => {
        window.onpopstate = () => props.dispatch(startGame())
        isOver(props);
        isWin(props);
    }, [props.errors, props.matrix]);
    const setValue = (e) => {
        const action = setValueActionCreater(e.target.textContent, indexArr)
        props.dispatch(action);

    };
    const [indexArr, newIndexArr] = useState([0, 0]);
    const setActiveInput = (a, b) => {
        newIndexArr([a, b]);
    }
    const tbody = props.matrix.map((tr, trIndex) => {
        return (
            <tr key={trIndex}>{tr.map((td, tdIndex) => {
                return (
                    <td key={tdIndex} onClick = {() => setActiveInput(trIndex, tdIndex)}
                    className={(trIndex === indexArr[0] && tdIndex === indexArr[1]) ? 'td active-ceil' : 'td'}>{td || ''}</td>
                )
            })}</tr>
        )
    });
    const values = props.values.map((number) => {
        return (
            <li className="number" key={number} onClick={setValue}>{number}</li>
        )
    })
    return (
        <div className='container'>
            <h1>Sudoku</h1>
            <table className="table">
                <tbody>{tbody}</tbody>
            </table>
            <ul className="numbers">{values}</ul>
            <div className="errors">Errors: {props.errors} / 3</div>
        </div>
    )
}

export default Game;