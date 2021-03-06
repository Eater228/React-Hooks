import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <div className="navbar-brand">
            Github Search
        </div>
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <NavLink to='/' className='nav-link'>Головна</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/about' className='nav-link'>Інформація</NavLink>
            </li>
        </ul>
    </nav>
)