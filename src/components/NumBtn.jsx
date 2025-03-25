import React, { useEffect } from 'react'

export default function NumBtn({ btn, numData, setNumData, numBtnRef }) {
    // const numBtnRef = useRef();
    useEffect(()=>{
        // console.log("re-render")
        // console.log(numData);
        console.log(numBtnRef.current.innerHTML);
        // if(numBtnRef !== null){
        //     numBtnRef.current.style.setAttribute("class","x");
        // }
        // if(numData === numBtnRef.current.innerHTML){
        //     document.querySelector(`#numBtn_${btn}`).setAttribute("class","x");
        // }/
        // checkSelected();
    },[numData])
    const checkSelected =()=>{
        if(btn === parseInt(numBtnRef.current.innerHTML)){
            numBtnRef.current.style.backgroundColor = "red";
        }
        else{
            numBtnRef.current.style.backgroundColor = "whitesmoke";
        }
        console.log(btn);
        console.log(parseInt(numBtnRef.current.innerHTML));
    }
  return (
    <div ref={numBtnRef} className='numBtnsTile' id={`numBtn_${btn}`} onClick={()=>{setNumData(btn)}}>{btn}</div>
  )
}
