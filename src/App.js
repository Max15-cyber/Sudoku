import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Game from './components/game/Game';
import GameOver from './components/gameOver/GameOver';
import Menu from './components/menu/Menu';
import Win from './components/win/Win';

function App() {
  // 
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Menu />}/>
            <Route path='/game' element={<Game />}/>
            <Route path='/win' element={<Win />}/>
            <Route path='/game_over' element={<GameOver />}/>
        </Routes>
    </div>
  );
}

export default App;
