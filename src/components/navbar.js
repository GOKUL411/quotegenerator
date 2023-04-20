import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            QUOTEMASTER
        </div>
        <ul className='navbar-menu'>
            <li><a href="/">Home</a></li>
            <li><a href="home">Trending Quotes</a></li>
            <li><a href="Contact us">Contact us</a></li>
        </ul>
    </div>
  )
}

export default Navbar