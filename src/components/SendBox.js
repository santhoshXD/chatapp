import React, { useState } from 'react'
import data from './data.json'
import './SendBox.css'
import { BsEmojiLaughing } from 'react-icons/bs'

const SendBox = ({sendChat}) => {

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

    return (
        <div className='send-box' >
           
            <div className='input-container'> 
            <BsEmojiLaughing className='emoji'/>
            <input className='type-msg' type='text' placeholder='Your message here...' value={input} onChange={handleInput}/>
            </div>
            <div className='image-container'> 
            <img src={data.messagebox.url} alt='d' />
            <img className='send-image' onClick={handleSend} src={data.messagebox.urlsend} alt='e' />
            </div>
        </div>
    )
}

export default SendBox
