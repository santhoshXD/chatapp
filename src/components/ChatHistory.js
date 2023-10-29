// import React, { useEffect, useState } from 'react';
// import './ChatHistory.css';
// import PopUp from './PopUp';


// const ChatHistory = (props) => {
//   const { search, darkMode } = props;
//   let hrflag = false;
//   const [showImage, setShowImage] = useState(false);
//   const [popupImage, setPopupImage] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [chatData, setChatData] = useState([]); 

//   const handlePopup = (imageSrc) => {
//     setPopupImage(imageSrc);
//     setShowImage(true);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:1234/gethistroy');
//         if (response.ok) {
//           const data = await response.json();
//           setChatData(data);
//           setLoading(false); 
//         } else {
//           console.error('Error fetching chat history data');
//         }
//       } catch (error) {
//         console.error('Error occurred:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const LoadingScreen = () => {
//     return (
//       <div className='loading-screen'>
//         <div className='loading-spinner'></div>
//         <div>
//           {/* <p>Loading...</p>  */}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className={`chat-history ${darkMode ? 'dark-mode' : ''}`}>
//       {loading ? (
//         <LoadingScreen />
//       ) : (
//         chatData
//           .filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
//           .map((user) => (
//             <div className='chat-div-body' key={user.id}>
//               {hrflag ? <hr className='hr'></hr> : (hrflag = true)}
//               <div className='chat-div'>
//                 <div className='msg-history'>
//                   <div className='img-div'>
//                     <img
//                       className='user-img'
//                       alt='true'
//                       src={user.profile}
//                       onClick={() => handlePopup(user.profile)}
//                     />
//                   </div>
//                   <div className='msg-text' onClick={() => props.handleSelectUser(user)}>
//                     <div className='usertime'>
//                       <h5 className='profile-name'>{user.name}</h5>
//                       <p className='time'>{user.lastmessage?.time}</p>
//                     </div>
//                     <p className='profile-msg'>{user.lastmessage?.message}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//       )}
//       {showImage ? (
//         <div className='popup-div'>
//           {showImage && (
//             <PopUp
//               userData={chatData.find((user) => user.profile === popupImage)}
//               onclose={() => setPopupImage(false)}
//               showImage={showImage}
//               users={chatData}
//               darkMode={darkMode}
//             />
//           )}
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default ChatHistory;


import React, { useEffect, useState } from 'react'
import './ChatHistory.css'
import users from './userdetails.json'
import PopUp from './PopUp'


const ChatHistory = (props) => {
    const {search,darkMode} = props
    console.log(search)
    let hrflag = false


    const[showImage,setShowImage] =useState(false)
    const[popupImage, setPopupImage] =useState('')
    
    const [loading,setLoading] = useState(true)


    useEffect(()=>{
        setTimeout(() => {setLoading(false)}, 500);
    }, [])

    const handlePopup = (imageSrc) =>{
        setPopupImage(imageSrc)
        setShowImage(true)

    }
    const LoadingScreen = () => {
        return (
          <div className='loading-screen'>
            <div className='loading-spinner'>
            </div>
            <div>
            <p></p>
            </div>
          </div>
        );
      };

  console.log(popupImage)
  
    return (
        <div className={`chat-history ${darkMode ? 'dark-mode' : ''}`}>
            {
            loading ? (
             <LoadingScreen/>
            ) : (
            users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
            .map(user =>
                    <div className='chat-div-body' >
                        {hrflag ? (
                            <hr className='hr'></hr>
                        ) : hrflag = true}
                        <div className="chat-div"  >
                            <div className='msg-history' >
                                <div className='img-div'>
                                    <img className='user-img' alt='true' src={user.profile} onClick={() => handlePopup(user)}  />
                                </div>
                                <div className='msg-text'  onClick={() => props.handleSelectUser(user)}>
                                    <div className="usertime">
                                    <h5 className='profile-name'>{user.name}</h5>
                                    <p className='time'>{user.lastmessage?.time}</p>
                                    </div>
                                    <p className='profile-msg'>{user.lastmessage?.message}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            )}
            { showImage ? (
            <div className='popup-div'>
                {
                    showImage && (
                        <PopUp
                        imageSrc={popupImage}
                        onclose={()=> setPopupImage(false)}
                        showImage ={showImage}
                        />
                    )
                }
            </div>): false
}
             
        </div>
    )
}


export default ChatHistory