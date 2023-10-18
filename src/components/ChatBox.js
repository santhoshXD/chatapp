import React from 'react';
import './ChatBox.css';
import chats from './chatdetails.json'
import data from './data.json'

const ChatBox = ({ user ,messagess}) => {
  const messages = chats[user.conversionid] || [];
  const dimages = data["default-image"]

  

  return (
    <div className="message-box">
      {!user ? (
        <img className='default-img' src={dimages.url} alt={dimages.alt} />
      ) : (
        <div>
          {messages.map((message) => (
            <div
              key={message.messageid}
              className={`message ${message.sender === '000000' ? 'sent' : 'received'}`}
            >
              {
                message.messagetype === 'text' ? (
                  <div className='message-content' >{message.message}</div>
                ) : "" }
                { message.messagetype === 'image' ? (
                  <div><img className= "chat-img" src={message.image} alt='imagee'/></div> ) : ""
              }
              <div className={`message-time ${message.sender === '000000' ? 'sent-time' : 'received-time'}`}>
                {message.status}
              </div>
            </div>
          ))}
          <div>
              <p className='sent'>{messagess}</p>
          </div>
        </div>
        
      )}
    </div>

  );
}

export default ChatBox;








