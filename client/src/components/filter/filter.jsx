import React, { useState } from 'react'
import './filter.scss'
function Filter() {
    const [query, setQuery] = useState({
        type: 'buy',
         location: '',
         minPrice: 0,
         MaxPrice: 0,
    })
  return (
    <div className='filter'>
        <div className="type">
            <button className={query.type === 'buy' ? 'active' : ''} onClick={()=> setQuery(prev=>( {...prev, type:'buy'}))}>Buy</button>
            <button className={query.type === 'rent' ? 'active' : ''}   onClick={()=> setQuery(prev=>( {...prev, type:'rent'}))}>Rent</button>
        </div>
        <form>
            <input type="text" placeholder='City Location' />
            <input type="number" min={0} max={1000000} placeholder='Min Price' />
            <input type="number" min={0} max={1000000} placeholder='Max Price' />
            <button>
                <img src="/search.png" alt="" />
            </button>

        </form>
    </div>
  )
}
export default Filter
