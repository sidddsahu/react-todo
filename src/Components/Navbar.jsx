import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='nav'>
        <div className='logo'>Itask</div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            {/* <li><Link to="/">Services</Link></li> */}
             <li><Link to="/">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar