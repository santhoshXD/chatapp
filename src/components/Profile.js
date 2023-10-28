import React, { useState } from 'react';
import './Profile.css';
import data from './data.json';
import SearchBar from './SearchBar';
import ChatHistory from './ChatHistory';
import ChatBox from './ChatBox';
import SendBox from './SendBox';
import ActiveStatus from './ActiveStatus';

const Profile = () => {
    const images = data["images"];
    const images2 = data["leftsettings"];
    const profile = data["profile"];
    const [search, setSearch] = useState('');
    const [selectedUser, setSelectedUser] = useState("");
    const [input, setInput] = useState([]);
    const [selectedDiv, setSelectedDiv] = useState(null);
    const [selectedDiv2, setSelectedDiv2] = useState(null);



 const initialDarkMode = localStorage.getItem('darkMode') === 'true';
 const [darkMode, setDarkMode] = useState(initialDarkMode);

 const toggleDarkMode = () => {
     const newDarkMode = !darkMode;
     setDarkMode(newDarkMode);
     localStorage.setItem('darkMode', newDarkMode);
 };


    const handleSearch = (e) => {
        setSearch(e);
    };

    const handleSelectUser = (user) => {
        setSelectedUser(user);
    };

    const handleInput = (e) => {
        setInput(e.target.value);
        console.log(input);
    };

    const handleSend = (message) => {
        const chatMsg = [{
            "messagetype": "text",
             "message": `${message}`,
             "messsageid": "msg00001",
             "sender": "000000",
             "recipient": selectedUser.conversionid,
             "status": "send",
             "time": "2023-10-06 08:32:00"
  }]
        setInput([...chatMsg,...input]);
        
    };

    

    const handleDivClick = (index) => {
        setSelectedDiv(index);
    };

    // const handleDivClick2 = (index) => {
    //     setSelectedDiv2(index);
    // };
   

    const[expand,setExpand] = useState(false)

    const handleExpand = () =>{
        setExpand(!expand)
    }
   

    return (
        <div className={`container ${darkMode ? 'dark-mode' : ''}  `}  >
            <div className={`sidebar ${darkMode ? 'dark-mode' : ''} ${expand ? 'expand' : ''}            `}>
                <div className='profile-div'>
                    <img className='profile' src={profile.url} alt={profile.alt} />
                </div>
                {images.map((image, index) => (
                    <div
                        className={`images ${selectedDiv === index ? 'selected' : ''}`}
                        onClick={() => handleDivClick(index)}
                    >
                        <p className={`image-text ${expand ? 'visible' : 'hidden'}`}>
                    {image.name}
                  </p>
                        <img className='settings' key={image.id} src={image.url} title={image.title} alt='settings' />
                </div>
                    
                    
                ))}
                
                <div className={`bottom-sidebar ${darkMode ? 'dark-mode' : ''}  ${expand ? 'expand' : ''} ` } >
                <div className="dark-mode-toggle" onClick={toggleDarkMode} >
                    {darkMode ? (
                        
                        <img className="dark-icons" alt='icon' src={data.darkicon} title="DarkIcon" />
                    ) : (
                        <img className="light-icons" alt='icon' src={data.lighticon} title='LightIcon'/>
                    )}
                </div>
                        
                        <div
                            className= 'images2'
                            onClick={handleExpand}>
                            
                            <img className='settings' src={data.leftsettings}  title='Expand' alt='settings'  />
                            
                        </div>
                   
                </div>
            </div>
            <div className='chats'>
                <SearchBar onSearch={handleSearch} darkMode={darkMode} />
                <ChatHistory handleSelectUser={handleSelectUser} search={search} darkMode={darkMode} />
            </div>
            <div className={`chatbox ${darkMode ? 'dark-mode' : ''}`}>
                <div className={`active-status ${darkMode ? 'dark-mode' : ''}`}>
                    {selectedUser ? <ActiveStatus darkMode={darkMode} user={selectedUser} /> : ""}
                </div>
                <div className='chat-box'>
                    <ChatBox user={selectedUser} newChat={input} darkMode={darkMode} />
                </div>
                <div className={`send-boxx ${darkMode ? 'dark-mode' : ''}`}>
                    {selectedUser ? (
                        <SendBox
                            input={input}
                            handleInput={handleInput}
                            sendChat={handleSend}
                            darkMode={darkMode}
                        />
                    ) : ""}
                </div>
            </div>
        </div>
    );
};

export default Profile;
