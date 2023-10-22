import React, { useState } from 'react'
import data from './data.json'
import './SendBox.css'
import { BsEmojiLaughing } from 'react-icons/bs'

const SendBox = ({sendChat,darkMode}) => {
  const darkicons = data["darkmode"]

    const [input, setInput] = useState('');

    const handleInput = (e) => {
      setInput(e.target.value);
    };


    const handleSend = () => {
        if (input) {
          sendChat(input)
          setInput('')

        }
      }


      const handleKeyPress = (e) =>{
        if (e.key === 'Enter'){
          e.preventDefault()
          handleSend()
        }
      }

    return (
        <div className='send-box' >
           
            <div className='input-container'> 
            <BsEmojiLaughing className='emoji'/>
            <input className='type-msg' type='text' placeholder='Your message here...' value={input} onChange={handleInput} onKeyPress={handleKeyPress}/>
            </div>
            <div className='image-container'> 
            { ! darkMode ? (
            <img src={data.messagebox.url} alt='d' />) : <img alt='e' src={darkicons.attach}/>
}           
              {!darkMode ? (
            <img className='send-image' onClick={handleSend} src={data.messagebox.urlsend} alt='e' />):(<img alt='f' src={darkicons.send}/>)
              }
            </div>
        </div>
    )
}

export default SendBox
