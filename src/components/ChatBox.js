// import React from 'react';
// import './ChatBox.css';
// import chats from './chatdetails.json'
// import data from './data.json'

// const ChatBox = ({ user, messagess, darkmode }) => {
//   const messages = chats[user.conversionid] || [];
//   const tick = data["tick"]


  
  

 
//   return (
//     <div className={`message-box ${darkmode ? 'dark-mode' : ''} `}>
//       {!user ? (

//         <h1 className={`default-msg  ${darkmode ? 'dark-mode' : ''}`}>Click User to Start a conversation</h1>
//       ) : (
//         <div className='message-div'>
//           {messages.slice().reverse().map((message) => (
//             <div
//               key={message.messageid}
//               className={`message ${message.sender === '000000' ? 'sent' : 'received'}`}
//             >
//               {
//                 message.messagetype === 'text' ? (
//                   <div className='message-content' >{message.message}</div>
//                 ) : ""}
//               {message.messagetype === 'image' ? (
//                 <div><img className="chat-img" src={message.image} alt='image' /></div>) : ""
//               }
//               <div className={`message-time ${message.sender === '000000' ? 'sent-time' : 'received-time'}`}>
//                 {message.sender === '000000' ? (
//                   message.status === 'seen' ? (
//                     <img className="chat-img seen-tick" src={tick.seen} alt='image' />
//                   ) : message.status === 'received' ? (
//                     <img className="received-tick" src={tick.received} alt='image' />
//                   ) : message.status === 'send' ? (
//                     <img className="chat-img sent-tick" src={tick.sent} alt='image' />
//                   ) : null
//                 ) : null}
//               </div>
//             </div>
//           ))}

//           <div className='sent-div'>
//           <p>{messagess}</p>
//           </div>

//         </div>

//       )}
//     </div>

//   );
// }

// export default ChatBox;


import React from 'react';
import './ChatBox.css';
import chats from './chatdetails.json';
import data from './data.json';

const ChatBox = ({ user, messagess, darkmode }) => {
  const messages = chats[user.conversionid] || [];
  const tick = data["tick"];


  // const chatMsg = [{
  //           "messagetype": "text",
  //            "message": `${messagess}`,
  //            "messsageid": "msg00001",
  //            "sender": "000000",
  //            "recipient": "000001",
  //            "status": "send",
  //            "time": "2023-10-06 08:32:00"
  // }]

  //  let  chatMessage = JSON.stringify(chatMsg)

  //  console.log("DEBUG :: ",chatMsg," :: ", chatMessage)
   
  

  const updatedMessages = [...messagess,...messages];


  // console.log('message:', messages)
  // console.log('messagess:', messagess);
  // console.log('updatedMessages:', updatedMessages);

  return (
    <div className={`message-box ${darkmode ? 'dark-mode' : ''} `}>
      {!user ? (
        <h1 className={`default-msg  ${darkmode ? 'dark-mode' : ''}`}>Click User to Start a conversation</h1>
      ) : (
        <div className='message-div'>
          {updatedMessages.slice().reverse().map((message) => (
            <div
              key={message.messsageid}
              className={`message ${message.sender === '000000' ? 'sent' : 'received'}`}
            >
              {message.messagetype === 'text' ? (
                <div className='message-content'>{message.message}</div>
              ) : ""}
              {message.messagetype === 'image' ? (
                <div><img className="chat-img" src={message.image} alt='image' /></div>
              ) : ""}
              <div className={`message-time ${message.sender === '000000' ? 'sent-time' : 'received-time'}`}>
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
}

export default ChatBox;


