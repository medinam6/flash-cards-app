import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='nav-bar'>
            <span className='nav-logo'>Flash Cards</span>
            <div className='nav-items'>
                <Link to='/'> Home </Link>
                <Link to='/study'> Study </Link>
            </div>
        </nav>
    )
}

export default Navbar;