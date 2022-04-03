const Game = () => {
    let data = [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 0, 4, 5, 6],
        [1, 2, 3, 4, 5, 0],
        [0, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 0, 6]
    ]
    let numbers = [1, 2, 3, 4, 5, 6];
    let errors = 0;
    const tbody = data.map((tr, trIndex) => {
        return (
            <tr key={trIndex}>{tr.map((td, tdIndex) => {
                return (
                    <td key={tdIndex}>{td || ''}</td>
                )
            })}</tr>
        )
    });
    const values = numbers.map((number) => {
        return(
            <li className="number">{number}</li>
        )
    })
    return (
        <div className='container'>
            <h1>Sudoku</h1>
            <table className="table">
                <tbody>{tbody}</tbody>
            </table>
            <ul className="numbers">{values}</ul>
            <div className="errors">Errors: {errors} / 3</div>
        </div>
    )
}

export default Game;