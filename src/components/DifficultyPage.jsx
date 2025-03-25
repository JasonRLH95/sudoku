import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function DifficultyPage({ username, setLvl, lvl }) {
    // const [lvl, setLvl] = useState(0);
    const nav = useNavigate();
    useEffect(()=>{
        if(lvl !== 0){
            return nav("/sudoku");
        }
    },[lvl])
    return (
        <div className="difficult_lvl_page">
            <h1 className="diff_mainHeader">Hello there {username}</h1>
            <h2 className="diff_subHeader">Choose the level difficulty:</h2>
            <div className="dif_lvl_options">
                <div id="lvl1" className="dif-lvl" onClick={()=>{setLvl(1)}}>1</div>
                <div id="lvl2" className="dif-lvl" onClick={()=>{setLvl(2)}}>2</div>
                <div id="lvl3" className="dif-lvl" onClick={()=>{setLvl(3)}}>3</div>
            </div>
        </div>
    )
}
