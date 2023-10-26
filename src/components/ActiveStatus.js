import React from 'react';
import './ActiveStatus.css'
import images from './data.json'
import {PiDotOutlineFill} from "react-icons/pi"

const ActiveStatus = ({ user ,darkMode}) => {

  const img = images["calls"]
  const darkicon = images["darkmode"]
  return (
    <div className={`top-div ${darkMode ? 'dark-mode' : ''}`}>
      <div className='top-box'>
        {user ? (
          <img className='top-profile' src={user.profile} alt='user-profile' />) : ("")
        }
      </div>
      <div className={`top-name ${darkMode ? 'dark-mode' : ''}`}>
        <div>
        <h2>{user.name}</h2>
        {user.currentstatus === 'active' ? (
          <p className='active-status'>
            <PiDotOutlineFill size={30} className='active-icon' />
            {user.currentstatus}
          </p>
        ) : (
          <p className='inactive-status'>
           <PiDotOutlineFill size={30} className='in-active-icon' />
            {user.currentstatus}
          </p>
        )}
        </div>
      </div>
      
      <div className={`top-icons ${darkMode ? 'dark-mode' : ''}`}>

          {! darkMode ? (
            <img className={`video ${darkMode ? 'dark-mode' : ''}`} src={img.video} alt='video'/>) : (<img className={`video ${darkMode ? 'dark-mode' : ''}`} src={darkicon.phone} alt='phone'/>)}
            
        
           { !darkMode ? (<img className={`phone ${darkMode ? 'dark-mode' : ''}`} src={img.phone} alt='phone'/>) : (<img className={`video ${darkMode ? 'dark-mode' : ''}`} src={darkicon.video} alt='video'/>)}
            
          
        </div>

    </div>
  )
}

export default ActiveStatus;

