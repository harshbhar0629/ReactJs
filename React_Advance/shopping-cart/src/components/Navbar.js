import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div>
      <div className='flex flex-row justify-between'>
        <div>image</div>
        {/* <img src="" alt='image'></img> */}
        <div>
          <p>Home</p>
          <FaShoppingCart></FaShoppingCart>
        </div>
      </div>
    </div>
  )
}

export default Navbar