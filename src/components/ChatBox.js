import React, { useEffect, useState } from 'react';
import './ChatBox.css';
import data from './data.json';

const ChatBox = ({ user, newChat, darkMode }) => {
  const tick = data["tick"];
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (user) {
      fetch(`http://localhost:1234/getchat?conversionid=${user.conversionid}`)
        .then((response) => response.json())
        .then((chats) => {
          const updatedMessages = [
            ...newChat.filter((message) => message.sender === "000000" && message.recipient === user.conversionid),
            ...chats
          ]
          setMessages(updatedMessages)
          setLoading(false);
          console.log(updatedMessages); 
        })
        .catch((error) => {
          console.error('Error fetching chat messages:', error);
          setLoading(false);
        });
    }
  }, [user, newChat]);
  

  return (
    <div className={`message-box ${darkMode ? 'dark-mode' : ''}`}>
      {!user ? (
        <h1 className={`default-msg ${darkMode ? 'dark-mode' : ''}`}>
          Click a user to start a conversation
        </h1>
      ) : loading ? (
        <div className='loading-screen'>
        <div className='loading-spinner'></div>
        <div>
          <p></p>
        </div>
      </div>
      ) : (
        <div className='message-div'>
          {messages.slice().reverse().map((message) => (
            <div
              key={message.messageid}
              className={`message ${message.sender === '000000' ? 'sent' : 'received'}`}
            >  

              {message.messagetype === 'text' ? (
                <div className='message-content'>{message.message}</div>
              ) : message.messagetype === 'image' ? (
                <div>
                  <img className="chat-img" src={message.image} alt='image' />
                </div>
              ) : null} 

              <div
                className={`message-time ${
                  message.sender === '000000' ? 'sent-time' : 'received-time'
                }`}
              >
                {message.sender === '000000' ? (
                  message.status === 'seen' ? (
                    <img className="chat-img seen-tick" src={tick.seen} alt='image' />
                  ) : message.status === 'received' ? (
                    <img className="received-tick" src={tick.received} alt='image' />
                  ) : message.status === 'send' ? (
                    <img className="chat-img sent-tick" src={tick.sent} alt='image' />
                  ) : null
                ) : null}
              </div>
            </div> 
          ))} 
        </div>
      )}
    </div>
  );
};

export default ChatBox;







