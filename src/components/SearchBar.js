import React, { useState } from 'react'
import './SearchBar.css'
import {FaSearch} from "react-icons/fa"





const SearchBar = ({onSearch}) => {
  const[search, setSearch] = useState("")

  const handleSearch = (e) =>{
    const searchValue = e.target.value
    setSearch(searchValue)
    onSearch(searchValue)

  }
 


  return (
    <div className='search-div'>
      <div className='search-bar'>
        <div className='search-icon'> 
        <p ><FaSearch className='icon'/></p>
        </div>
      <input className='search-input' placeholder= 'Search chats...'  value={search} onChange={handleSearch}/>
      </div>
    </div>
  )
}

export default SearchBar
