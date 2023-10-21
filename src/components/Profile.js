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
    const [darkMode, setDarkMode] = useState(false);
    const [selectedUser, setSelectedUser] = useState("");
    const [input, setInput] = useState('');
    const [selectedDiv, setSelectedDiv] = useState(null);
    const [selectedDiv2, setSelectedDiv2] = useState(null);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
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

    const handleSend = (messagess) => {
        setInput([messagess]);
    };

    const handleDivClick = (index) => {
        setSelectedDiv(index);
    };

    const handleDivClick2 = (index) => {
        setSelectedDiv2(index);
    };

    return (
        <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
            <div className={`sidebar ${darkMode ? 'dark-mode' : ''}`}>
                <div className='profile-div'>
                    <img className='profile' src={profile.url} alt={profile.alt} />
                </div>
                {images.map((image, index) => (
                    <div
                        className={`images ${selectedDiv === index ? 'selected' : ''}`}
                        onClick={() => handleDivClick(index)}
                    >
                        <img className='settings' key={image.id} src={image.url} alt='settings' />
                    </div>
                ))}
                <div className='dark-btn'>
                    <button className="darkmode-toggle" onClick={toggleDarkMode}>
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
                <div className={`bottom-sidebar ${darkMode ? 'dark-mode' : ''}`}>
                    {images2.map((image2, index) => (
                        <div
                            className={`images2 ${selectedDiv2 === index ? 'selected2' : ''}`}
                            onClick={() => handleDivClick2(index)}
                        >
                            <img className='settings' key={image2.id} src={image2.url} alt='settings' />
                        </div>
                    ))}
                </div>
            </div>
            <div className='chats'>
                <SearchBar onSearch={handleSearch} darkMode={darkMode} />
                <ChatHistory handleSelectUser={handleSelectUser} search={search} darkMode={darkMode} />
            </div>
            <div className={`chatbox ${darkMode ? 'dark-mode' : ''}`}>
                <div className={`active-status ${darkMode ? 'dark-mode' : ''}`}>
                    {selectedUser ? <ActiveStatus  darkMode={darkMode} user={selectedUser} /> : ""}
                </div>
                <div className='chat-box'>
                    <ChatBox user={selectedUser} messagess={input} darkMode={darkMode} />
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
