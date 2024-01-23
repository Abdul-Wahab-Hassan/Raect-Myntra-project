import React from 'react'
import HomeItem from '../components/Homeitem'
import { useSelector } from 'react-redux'

const Beauty = () => {
  const items=  useSelector(store=>store.items)
  return (
    <mian>
        <div className='items-container'>
            {items.map(item=>item.category==="BEAUTY"&& <HomeItem key={items.id} item={item}/>)}
        </div>
    </mian>
  )
}

export default Beauty