import React from 'react'
import { listData } from '../../lib/dummydata'
import Card from '../card/card'
import './list.scss'
function List({items}) {
  console.log(items)
  return (
    <div className='list'>
      {!items ||  items.length === 0 && <h3>Not Posts Founds</h3>}
      {items.map((item, i)=> (
        <Card  item={item} key={i} />
      ))}
    </div>
  )
}

export default List
