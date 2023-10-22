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
    const [input, setInput] = useState('');
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
                <div className="dark-mode-toggle" onClick={toggleDarkMode}>
                    {darkMode ? (
                        <img className="dark-icons" alt='icon' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtbW9vbiI+PHBhdGggZD0iTTEyIDNhNiA2IDAgMCAwIDkgOSA5IDkgMCAxIDEtOS05WiIvPjwvc3ZnPg==' />
                    ) : (
                        <img className="light-icons" alt='icon' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtc3VuLW1vb24iPjxwYXRoIGQ9Ik0xMiA4YTIuODMgMi44MyAwIDAgMCA0IDQgNCA0IDAgMSAxLTQtNCIvPjxwYXRoIGQ9Ik0xMiAydjIiLz48cGF0aCBkPSJNMTIgMjB2MiIvPjxwYXRoIGQ9Im00LjkgNC45IDEuNCAxLjQiLz48cGF0aCBkPSJtMTcuNyAxNy43IDEuNCAxLjQiLz48cGF0aCBkPSJNMiAxMmgyIi8+PHBhdGggZD0iTTIwIDEyaDIiLz48cGF0aCBkPSJtNi4zIDE3LjctMS40IDEuNCIvPjxwYXRoIGQ9Im0xOS4xIDQuOS0xLjQgMS40Ii8+PC9zdmc+' />
                    )}
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
                    {selectedUser ? <ActiveStatus darkMode={darkMode} user={selectedUser} /> : ""}
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
