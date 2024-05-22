import React from 'react'
import { listData } from '../../lib/dummydata'
import Card from '../card/card'
import './list.scss'
function List() {
  return (
    <div className='list'>
      {listData.map((item, i)=> (
        <Card  item={item} key={i} />
      ))}
    </div>
  )
}

export default List
