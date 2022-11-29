import React from 'react'
import './home.css'
import Leftbar from '../../Components/Leftbar/Leftbar'
import Maincontainer from '../../Components/Maincontainer/Maincontainer'
import Rightbar from '../../Components/Rightbar/Rightbar'
function Home() {
  return (
    <div className='cls'>
<Leftbar/>
<Maincontainer/>
<Rightbar/>
    </div>
  )
}

export default Home