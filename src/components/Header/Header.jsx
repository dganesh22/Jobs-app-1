import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <div className="container">
            <NavLink to={`/`}>
                <h1>Jobs-App</h1>
            </NavLink>
        </div>
    </header>
  )
}

export default Header
