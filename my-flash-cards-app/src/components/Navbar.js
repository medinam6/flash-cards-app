import React from 'react';
import { Link } from 'react-router-dom';

import './components.css'

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <Link to='/'> Home </Link>
            <Link to='/study'> Study </Link>
        </div>
    )
}

export default Navbar;