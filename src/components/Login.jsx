import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login({ username, setUsername, setPage }) {
    const [alertText, setAlertText] = useState("");
    const [alertFlag, setAlertFlag] = useState(false);

    // const nav = useNavigate();
    const validate = () => {
        if(username === ""){
            return alert("Must fill username field");
        }
        var valid = false;
        if(username !== ""){
            var u = username.toLowerCase();
            for(let i = 0; i < u.length; i++){
                if(u[i] < 'a' || u[i] > 'z'){
                    return showAlertText("Username must include only letters")
                }
            }
            valid = true;
        }
        if(valid){
            return setPage(2);
            // return nav("/choose_difficulty")
        }
        
    }
    const showAlertText = (text)=>{
        setAlertText(text);
        setAlertFlag(true);
        setTimeout(() => {
            setAlertText("");
            setAlertFlag(false);
        }, 4000);
    }

    return (
        <div className="login">
            <h1 className="login_mainHeader">Sudoku Game</h1>
            <div className='login_inputDiv'>
                <label htmlFor='username' className='label_username'>Enter your name:</label>
                <input onChange={(e)=>{setUsername(e.target.value)}} placeholder="Username" type="text" name='username' className="login_input"/>
                {alertFlag && <p className="login_alert">{alertText}</p>}
            </div>
            <button className="login_btn" onClick={()=>{validate()}}>login</button>
        </div>
  )
}
