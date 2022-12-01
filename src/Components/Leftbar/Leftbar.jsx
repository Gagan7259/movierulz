import React from 'react'
import './left.css'
import browse from "../../Icons/explore.png"
import Watchlist from "../../Icons/heart.png"
import Commingsoon from "../../Icons/calendar.png"
import FRiend from '../../Icons/friends (1).png'
import party from '../../Icons/friends.png'
import Setting from '../../Icons/settings.png'
import Logout from '../../Icons/exit.png'
import challenge from '../../Images/pexels-bess-hamiti-35537.jpg'
function Leftbar() {
  return (
    <div className="left">
      <h2 className="logo">
        Movierulz <span className="l">.</span>
      </h2>
      <div>
        <p className='pname'>Menu</p>
        <ul>
          <li>
            <img src={`${browse}`} className='listicon' alt="" />
            <p className="liname">Browse</p>
          </li>
          <li>
            <img src={`${Watchlist}`} className='listicon' alt="" />
            <p className="liname">Watchlist</p>
          </li>
          <li>
            <img src={`${Commingsoon}`} className='listicon' alt="" />
            <p className="liname">Coming Soon</p>
          </li>
        </ul>
      </div>
      <div>
        <p className='pname'>Social</p>
        <ul>
          <li>
            <img src={`${FRiend}`} className='listicon' alt="" />
            <p className="liname">Friends</p>
          </li>
          <li>
            <img src={`${party}`} className='listicon' alt="" />
            <p className="liname">Party</p>
          </li>
        </ul>
      </div>
      <div>
        <p className='pname'>Genaral</p>
        <ul>
          <li>
            <img src={`${Setting}`} className='listicon' alt="" />
            <p className="liname">Setting</p>
          </li>
          <li>
            <img src={`${Logout}`} className='listicon' alt="" />
            <p className="liname">Logout</p>
          </li>
        </ul>
      </div>
      <div className='div' >
        <img className='imagec' src={`${challenge}`} alt="" />
        <p className='hero'>Ntr monster</p>
        <p className='time'>5/6h viewing Time</p>
        <button className='btn1s'>Challenge</button>
      </div>
    </div>
  )
}

export default Leftbar
