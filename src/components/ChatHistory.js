import React, { useEffect, useState } from 'react'
import './ChatHistory.css'
import users from './userdetails.json'
import PopUp from './PopUp'


const ChatHistory = (props) => {
    const {search} = props
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
            <p>Loading Chats...</p>
            </div>
          </div>
        );
      };


  
    return (
        <div className='chat-history'>
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
                                    <img className='user-img' alt='true' src={user.profile} onClick={() => handlePopup(user.profile)}  />
                                </div>
                                <div className='msg-text'  onClick={() => props.handleSelectUser(user)}>
                                    <div className="usertime">
                                    <h5 className='profile-name'>{user.name}</h5>
                                    <p className='time'>{user.lastmessage.time}</p>
                                    </div>
                                    <p className='profile-msg'>{user.lastmessage.message}</p>
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
