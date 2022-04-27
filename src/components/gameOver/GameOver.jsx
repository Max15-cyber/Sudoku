import { NavLink } from "react-router-dom";

const GameOver = () => {
    return (
        <div className='container'>
        <h1 className='page-name'>Game Over!</h1>
        <NavLink className='btn' to='/game'>Play Again</NavLink>
      </div>
    )
}

export default GameOver;