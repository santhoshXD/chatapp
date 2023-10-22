import React from 'react';
import './ChatBox.css';
import chats from './chatdetails.json'
import data from './data.json'

const ChatBox = ({ user, messagess, darkmode }) => {
  const messages = chats[user.conversionid] || [];
  // const dimages = data["default-image"]
  const tick = data["tick"]



  return (
    <div className={`message-box ${darkmode ? 'dark-mode' : ''} `}>
      {!user ? (
        // <img className='default-img' src={dimages.url} alt={dimages.alt} />
        <h1 className={`default-msg  ${darkmode ? 'dark-mode' : ''}`}>Click User to Start a conversation</h1>
      ) : (
        <div className='message-div'>
          {messages.slice().reverse().map((message) => (
            <div
              key={message.messageid}
              className={`message ${message.sender === '000000' ? 'sent' : 'received'}`}
            >
              {
                message.messagetype === 'text' ? (
                  <div className='message-content' >{message.message}</div>
                ) : ""}
              {message.messagetype === 'image' ? (
                <div><img className="chat-img" src={message.image} alt='image' /></div>) : ""
              }
              <div className={`message-time ${message.sender === '000000' ? 'sent-time' : 'received-time'}`}>
                {message.sender === '000000' ? (
                    message.status === 'seen' ? (
                      <img className="chat-img seen-tick" src={tick.seen} alt='image' />
                    ) : (
                      <img className="chat-img sent-tick" src={tick.sent} alt='image' />
                    )
                  ) : null}
              </div>
            </div>
          ))}
          <div className='sent-div'>
            <p className='sent'>{messagess}</p>
          </div>
        </div>

      )}
    </div>

  );
}

export default ChatBox;








