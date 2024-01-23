import React from 'react'
import { useSelector } from 'react-redux'
import HomeItem from '../components/Homeitem'

const Women = () => {
   const items= useSelector(store=> store.items)
  return (
    <mian>
        <div className='items-container'>
            {items.map(item=>item.category==="WOMEN"&& <HomeItem key={items.id} item={item}/>)}
        </div>
    </mian>
  )
}

export default Women