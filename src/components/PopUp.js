import React from 'react';
import data from './data.json';
import './PopUp.css'

const PopUp = (props) => {
  const { imageSrc, onclose, showImage } = props;
  const wrong = data["default-image"];
  console.log(showImage)


  
    if (!imageSrc) {
        return null; 
      }

      
  return (
    <div className='image-popup'>
        <div className='popup-content'>
          <img className="popup-img" src={imageSrc} alt='Profile' />
          <img className='wrong' src={wrong.close} onClick={onclose} alt='close' />
        </div>
    </div>
  );
};

export default PopUp;
