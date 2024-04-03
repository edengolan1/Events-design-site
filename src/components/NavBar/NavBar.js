import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='navbar'>
            <div className='navbar-title'>
                <h2 className='title-events'>Events</h2>
            </div>
            <div className='list-navbar'>
                <Link to="/" className='link-navbar'>דף הבית</Link>
                <Link to="/examples" className='link-navbar'>האירועים שלי</Link>
                <Link to="/contact" className='link-navbar'>צור קשר</Link>
                <Link to="/about" className='link-navbar'>אודות</Link>
            </div>
        </div>
    );
}

export default NavBar;