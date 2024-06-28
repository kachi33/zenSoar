import React from 'react';
import './header.css';

const Header = function() {
    return( 
        <header className='header'>
            <div className='header-logo'>
                <img alt='logo'src='#'/>
                <h1 className='header-tagline'>Digital Lab Assistant</h1>
            </div>
            <nav className='header-nav'>
                <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;