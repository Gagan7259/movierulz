import React from 'react'
import '../Navbar/navbar.css'
import profile from '../../Images/photo.jpg'
import notification from '../../Icons/notification.png'
import search from '../../Icons/search.png'
function Navbar() {
  return (
    <div className="navba">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className='serchbar'
          style={{
            display: 'flex',
            alignItem: 'center',
            marginLeft: '10px',
            marginInline:"20px",
            marginTop:"7px",
            borderBlockColor: 'white',
          }}
        >
          <img className="search" src={`${search}`} alt="" />
          <input className='icon' type="search" />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginRight: '20px',
          }}
        >
          <img src={`${notification}`} className="notification" alt="" />
          <img src={`${profile}`} className="profile" alt="" />
          <p className="gagan">Gagan</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
