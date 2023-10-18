import React, { useState } from 'react'
import './Profile.css'
import data from './data.json'
import SearchBar from './SearchBar'
import ChatHistory from './ChatHistory'
import ChatBox from './ChatBox'
import SendBox from './SendBox'
import ActiveStatus from './ActiveStatus'



const Profile = () => {
    const images = data["images"]
    const images2 = data["leftsettings"]
    const profile = data["profile"]
    const [search, setSearch] = useState("")

    const handleSearch = (e) => {
        setSearch(e)
    }

    const [selectedUser, setSelectedUser] = useState("");

    const handleSelectUser = (user) => {
        setSelectedUser(user);
    };

    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value)
        console.log(input)
    }
   
    
    const handleSend = (messagess) =>{
        setInput([messagess])
    }


    const [selectedDiv, setSelectedDiv] = useState(null);
    const [selectedDiv2,setSelectedDiv2] = useState(null)

  const handleDivClick = (index) => {
    setSelectedDiv(index)
  }

  const handleDivClick2 = (index) =>{
    setSelectedDiv2(index)
  }
    return (
        <div className='container'>
            <div className='sidebar'>
                <div className='profile-div'>
                    <img className='profile' src={profile.url} alt={profile.alt} />
                </div>
                {
                    images.map((image,index )=> (
                        <div className={`images ${selectedDiv === index ? 'selected' : ''}`}
                        onClick={() => handleDivClick(index)}>
            
                            <img className='settings' key={image.id} src={image.url} alt='settings' />
                        </div>
                    ))}

                <div className='bottom-sidebar'>
                    {
                        images2.map((image2,index) => (
                            <div className={`images2 ${selectedDiv2 === index ? 'selected2' : ''}`}
                            onClick={() => handleDivClick2(index)}>
                                <img className='settings' key={image2.id} src={image2.url} alt='settings' />

                            </div>
                        ))}
                </div>

            </div>

            <div className='chats'>
                <SearchBar
                    onSearch={handleSearch}
                />
                <ChatHistory
                    handleSelectUser={handleSelectUser}
                    search={search} />
            </div>



            <div className="chatbox">
                <div className='active-status' >
                    {selectedUser ? (
                        <ActiveStatus user={selectedUser} />) : ("")
                    }


                </div>
                <div className='chat-box'>
                    <ChatBox
                        user={selectedUser}
                        messagess={input}
                    />
                </div>
            
                <div className='send-boxx'>
                    {selectedUser ? (
                        <SendBox
                            input={input}
                            handleInput={handleInput}
                           sendChat= {handleSend}
                            
                        />) : ("")
                    }
                </div>
            </div>




        </div>
    )

}

export default Profile
