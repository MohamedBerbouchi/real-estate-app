import React, { useState } from 'react'
import './searchBar.scss'
import {Link} from 'react-router-dom';
function SearchBar() {
    const [query, setQuery] = useState({
        type: 'buy',
         location: '',
         minPrice: 0,
         MaxPrice: 1000000,
    })

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setQuery(prev => ({...prev, [name]: value}))
    }
  return (
    <div className='filter'>
        <div className="type">
            <button className={query.type === 'buy' ? 'active' : ''} onClick={()=> setQuery(prev=>( {...prev, type:'buy'}))}>Buy</button>
            <button className={query.type === 'rent' ? 'active' : ''}   onClick={()=> setQuery(prev=>( {...prev, type:'rent'}))}>Rent</button>
        </div>
        <form>
            <input type="text" placeholder='City Location' name='location' required  />
            <input type="number" min={0} max={1000000} placeholder='Min Price' name='minPrice' required />
            <input type="number" min={0} max={1000000} placeholder='Max Price' name='MaxPrice' required />
            <Link to={`/list?type=${query.type}&location=${query.location}&minPrice=${query.minPrice}&MaxPrice=${query.MaxPrice}`}>
            <button>
                <img src="/search.png" alt="" />
            </button>
            </Link>
        </form>
    </div>
  )
}
export default SearchBar
