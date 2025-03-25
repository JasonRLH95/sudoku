// import { Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import DifficultyPage from './components/DifficultyPage';
import { useState } from 'react';
import MainGame from './components/MainGame';
// import Page404 from './components/Page404';
import RepairSite from './components/RepairSite';

function App() {
  
  const [username, setUsername] = useState("");
  const [lvl, setLvl] = useState(0);
  const [page, setPage] = useState(0);

  const renderPage =()=>{
    switch(page){
      case 0: 
        return <RepairSite/>
      case 1: 
        return <Login username={username} setUsername={setUsername} setPage={setPage}/>
      case 2: 
        return <DifficultyPage username={username} setLvl={setLvl} lvl={lvl} setPage={setPage}/>
      case 3:
        return <MainGame username={username} lvl={lvl} setPage={setPage}/>
    }
  }
  return (
    <div className='App_container'>
      {renderPage()}
    </div>
  )
}

export default App
