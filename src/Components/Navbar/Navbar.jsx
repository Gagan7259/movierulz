import React from 'react'
import '../Navbar/navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
      <div style={{display: 'flex',
justifyContent: 'space-between'}}>
        <div>
          <img src="" alt="" />
          <input  type="search" />
        </div>
        <div style={{display:"flex" , alignItems:"Center"}}>
          <img src="" className='notification' alt="" />
          <img src="" className='search' alt="" />
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar