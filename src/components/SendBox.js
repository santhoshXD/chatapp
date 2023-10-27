import React, { useState } from 'react';
import data from './data.json';
import './SendBox.css';
import { BsEmojiLaughing } from 'react-icons/bs';

const SendBox = ({ sendChat, darkMode }) => {
  const darkicons = data["darkmode"];

  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (input) {
      sendChat(input);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`send-box ${darkMode ? 'dark-mode' : ''}`}>
      <div className='input-container'>
        <BsEmojiLaughing className='emoji' />
        <input
          className={`type-msg ${darkMode ? 'dark-mode' : ''}`}
          type='text'
          placeholder='Your message here...'
          value={input}
          onChange={handleInput}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className={`image-container ${darkMode ? 'dark-mode' : ''}`}>
        {darkMode ? (
          <img className='attach' alt='e' src={darkicons.attach} />
        ) : (
          <img className='attach' src={data.messagebox.url} alt='d' />
        )}
        {darkMode ? (
          <img alt='f' src={darkicons.send} onClick={handleSend} />
        ) : (
          <img
            className={`send-image ${darkMode ? 'dark-mode' : ''}`}
            src={data.messagebox.urlsend}
            alt='e'
            onClick={handleSend}
          />
        )}
      </div>
    </div>
  );
};

export default SendBox;
