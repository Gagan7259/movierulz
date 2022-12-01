import React from 'react'
import './main.css'
import Navbar from '../Navbar/Navbar'
import rrr from '../../Images/the-conjuring-movie-franchise-house-documentary-1274867.png'
import it1 from '../../Images/081375e85109a35577efeb1bbb34f967.jpg'
function Maincontainer() {
  return (
    <div className="main">
      <Navbar />
      <div>
        <img className="cover" src={`${rrr}`} alt="" />
        <div className="nm">
          <p className="title">The Conjuring Movie</p>
          <p className="subtitle">98% Match</p>
          <div className="f">
            <button className="btnw">Watch Now</button>
            <div>
              <p className="add">+</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="cw">Continue Watching</h4>
        <div style={{ display: 'flex', marginLeft:"25px", flexwrap:"wrap" }}>
          <div className="container1">
            <img className="it1" src={`${it1}`} alt="" />
            <p className="i1">Hunting House</p>
          </div>
          <div className="container1">
            <img className="it1" src={`${it1}`} alt="" />
            <p className="i1">Hunting House</p>
          </div>
          <div className="container1">
            <img className="it1" src={`${it1}`} alt="" />
            <p className="i1">Hunting House</p>
          </div>
          <div className="container1">
            <img className="it1" src={`${it1}`} alt="" />
            <p className="i1">Hunting House</p>
          </div>
          <div className="container1">
            <img className="it1" src={`${it1}`} alt="" />
            <p className="i1">Hunting House</p>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default Maincontainer
