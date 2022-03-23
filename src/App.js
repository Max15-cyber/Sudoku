import './App.scss';

function App() {
  let title = "Sudoku";
  // 
  return (
    <div className="App">
      <div className='container'>
        <h1>{title}</h1>
        <table className="table">
          <tbody>
            <tr className="tr">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
        <ul className="numbers">
          <li className="number">1</li>
          <li className="number">2</li>
          <li className="number">3</li>
          <li className="number">4</li>
          <li className="number">5</li>
          <li className="number">6</li>
        </ul>
        <div className="errors">Errors: 0 / 3</div>
      </div>
    </div>

  );
}

export default App;
