import React from 'react'
import { useSelector } from 'react-redux'
import HomeItem from '../components/Homeitem'

const Men = () => {
   const items= useSelector(store=>store.items)
    

  return (
    <mian>
        <div className='items-container'>
            {items.map(item=>item.category==="MEN"&& <HomeItem key={items.id} item={item}/>)}
        </div>
    </mian>
  )
}

export default Men;