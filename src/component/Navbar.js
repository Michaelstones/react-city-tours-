import React from 'react'
import './Navbar.scss'
import logo from '../../src/logo.svg'

export default function Navbar() {
    return (
        <nav className='navbar'>
         <img src={logo} alt='city tours' />
           
            <ul className='nav-links'>
                <li>
                    <a className='nav-link'>
                        home
                    </a>
                </li>
                <li>
                    <a className='nav-link'>
                        about
                    </a>
                </li>
                <li>
                    <a className='nav-link active'>
                        tours
                    </a>
                </li>
            </ul>
            
        </nav>
    )
}
