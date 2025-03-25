import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import DifficultyPage from './components/DifficultyPage';
import { useState } from 'react';
import MainGame from './components/MainGame';
import Page404 from './components/Page404';
import RepairSite from './components/RepairSite';

function App() {
  // const [count, setCount] = useState(0)
  const [username, setUsername] = useState("");
  const [lvl, setLvl] = useState(0);
  return (
    <div className='App_container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RepairSite/>}/>
          <Route path='/temp' element={<Login username={username} setUsername={setUsername}/>}/>
          <Route path='/choose_difficulty' element={<DifficultyPage username={username} setLvl={setLvl} lvl={lvl}/>}/>
          <Route path='/sudoku' element={<MainGame username={username} lvl={lvl}/>}/>
          <Route path='*' element={<Page404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
