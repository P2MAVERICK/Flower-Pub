import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between py-4 bg-transparent px-12 w-full absolute'>
      <div className='navbar-left flex gap-14'> 
        <div>FP</div>
        <div>Shop</div>
        <div>About</div>
        <div>Blog</div>
      </div>
      <div className='navbar-right flex gap-8 text-white'>
        <div>Facebook</div>
        <div>Instagram</div>
      </div>
    </div>
  )
}

export default Navbar
