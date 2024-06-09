import React, { useState } from 'react'
import './searchBar.scss'
import {Link, useNavigate} from 'react-router-dom';
function SearchBar() {
    const [query, setQuery] = useState({
        type: 'buy',
         location: '',
         minPrice: 0,
         MaxPrice: '',
    })

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setQuery(prev => ({...prev, [name]: value}))
    }
    const navigate = useNavigate()
    function handleClick(e){
        e.preventDefault()
        const app_url = import.meta.env.VITE_APP_URL;
        const url = new URL(app_url)
        url.searchParams.append('type', query.type)
        url.searchParams.append('location', query.location)
        url.searchParams.append('minPrice', query.minPrice)
        url.searchParams.append('MaxPrice', query.MaxPrice)
        navigate('/list'+url.search)
    }
  return (
    <div className='filter'>
        <div className="type">
            <button className={query.type === 'buy' ? 'active' : ''} onClick={()=> setQuery(prev=>( {...prev, type:'buy'}))}>Buy</button>
            <button className={query.type === 'rent' ? 'active' : ''}   onClick={()=> setQuery(prev=>( {...prev, type:'rent'}))}>Rent</button>
        </div>
        <form onSubmit={handleClick}>
            <input type="text" placeholder='City Location' name='location'  onClick={handleChange}   />
            <input type="number" min={0} max={1000000} placeholder='Min Price' name='minPrice'   onClick={handleChange}  />
            <input type="number" min={0} max={1000000} placeholder='Max Price' name='MaxPrice'  onClick={handleChange}  />
            {/* <Link to={`/list?type=${query.type}&location=${query.location}&minPrice=${query.minPrice}&MaxPrice=${query.MaxPrice}`}> */}
            <button>
                <img src="/search.png" alt="" />
            </button>
            {/* </Link> */}
        </form>
    </div>
  )
}
export default SearchBar
