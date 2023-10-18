import React, { useState } from 'react';
import './ChatBox.css';
import chats from './chatdetails.json';

function ChatBox() {
  const [activeChat, setActiveChat] = useState(null);

  const handleChatClick = (chatId) => {
    setActiveChat(chatId);
  };

  return (
    <div className="chat-box">
      <div className="chat-list">
        {Object.keys(chats).map((chatId) => (
          <div
            key={chatId}
            onClick={() => handleChatClick(chatId)}
            className={`chat-item ${activeChat === chatId ? 'active' : ''}`}
          >
            Chat {chatId}
          </div>
        ))}
      </div>
      <div className="message-box">
        {activeChat &&
          chats[activeChat].map((message) => (
            <div
              key={message.messageid}
              className={`message ${message.sender === '000000' ? 'sent' : 'received'}`}
            >
              <div className="message-content">{message.message}</div>
              <div className={`message-time ${message.sender === '000000' ? 'sent-time' : 'received-time'}`}>
                {message.time}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ChatBox;


