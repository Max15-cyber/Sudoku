import { NavLink } from "react-router-dom";

const Win = () => {
    return (
        <div className='container'>
            <h1 className='page-name'>You Won!</h1>
            <NavLink className='btn' to='/game'>Play again</NavLink>
        </div>
    )
}

export default Win;