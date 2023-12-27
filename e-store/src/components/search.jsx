import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate();

    
    // This hook is used to delay the search until the user stops typing for 500 milliseconds. 
    // This helps reduce unnecessary API calls and improves performance.
    useEffect(() => {
        const timerID = setTimeout(() => {
            if (searchTerm)
                navigate(`/search?s=${searchTerm}`)
        }, 500);
        return () => clearTimeout(timerID)
    }, [navigate, searchTerm])

    const handleChange = ev => {
        setSearchTerm(ev.target.value)
    } 
  return (
    <div id='search'>
        <label >Search</label>
        <input type='text' name='search' onChange={handleChange}/>
    </div>
  )
}

export default Search