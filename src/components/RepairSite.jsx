import React from 'react'

export default function RepairSite({ setPage }) {
  return (
    <div style={{marginTop:"200px"}}>
      <button onClick={()=>{setPage(1)}}>temp</button>
      <h1>Currently on improovments</h1>
      <h2>We're working on something great for you</h2>
      <h3>Plesae get back at another day</h3>
    </div>
  )
}
