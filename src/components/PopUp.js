import React, { useEffect, useRef } from 'react';
import data from './data.json';
import './PopUp.css';

const PopUp = (props) => {
  const { userData, onclose, showImage, darkMode } = props;
  const wrong = data["default-image"];
  const pop = data["popup"];
  const darkmode = data["darkmode"];

  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onclose();
      }
    };

    if (showImage) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showImage, onclose]);

  if (!showImage || !userData) {
    return null;
  }

  return (
    <div className={`image-popup ${darkMode ? 'dark-mode' : ''}`} ref={popupRef}>
      <div className={`popup-content ${darkMode ? 'dark-mode' : ''}`}>
        <img className="popup-img" src={userData.profile} alt='Profile' />
        {!darkMode ? (
          <img className='wrong' src={wrong.close} onClick={onclose} alt='close' />
        ) : (
          <img className='wrong' src={darkmode.close} onClick={onclose} alt='close' />
        )}
        <div className="user-info">
          <h1>{userData.name}</h1>
          <p>{userData.currentstatus}</p>
        </div>
        <div className='popup-dtl'>
          <div className='pop-item'>
            {!darkMode ? (
              <img className='pop-img' src={pop.msgpop} alt='msg' />
            ) : (
              <img src={darkmode.chat} alt='chat' />
            )}
            {!darkMode ? (
              <img className='pop-img' src={pop.phonepop} alt='phone' />
            ) : (
              <img src={darkmode.phone} alt='phone' />
            )}
            {!darkMode ? (
              <img className='pop-img' src={pop.videopop} alt='video' />
            ) : (
              <img src={darkmode.video} alt='video' />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
