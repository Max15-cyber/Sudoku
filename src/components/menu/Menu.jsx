import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div className='container'>
            <h1 className='page-name'>Sudoku</h1>
            <NavLink className='btn' to='/game'>Start Game</NavLink>
        </div>
    )
}

export default Menu;