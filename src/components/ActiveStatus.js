import React from 'react';
import './ActiveStatus.css'
import images from './data.json'

const ActiveStatus = ({ user }) => {

  const img = images["calls"]
  return (
    <div className='top-div'>
      <div className='top-box'>
        {user ? (
          <img className='top-profile' src={user.profile} alt='user-profile' />) : ("")
        }
      </div>
      <div className='top-name'>
        <div>
        <h2>{user.name}</h2>
        <p>{user.currentstatus}</p>
        </div>


        
      </div>
      <div className='top-icons'>

          {user ? (
            <img className='video' src={img.video} alt='video' />
          ) : ("")}
          {user ? (
            <img className='phone' src={img.phone} alt='phone' />
          ) : ("")}
        </div>

    </div>
  )
}

export default ActiveStatus;

