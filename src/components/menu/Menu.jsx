import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div className='container'>
            <h1 className='page-name'>Sudoku</h1>
            <NavLink className='btn' to='/game'>Start Game</NavLink>
            <NavLink className='btn' to='/game_over'>End Game</NavLink>
            <NavLink className='btn' to='/win'>Skip Mission</NavLink>
        </div>
    )
}

export default Menu;