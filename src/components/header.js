import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Import icons
import Logo from './UI/Logo';



const Header = function() {
    const [isVisible, setIsVisible] = useState({
        navVisibilty: false,
        dropdownVisible: false
    });

    const toggleVisibility = (key) => {
        setIsVisible((prevState) => ({
            ...prevState, 
            [key]: !prevState[key],
        }));
      };

    const handleDropdownClick = () => {
        toggleVisibility('navVisible');
        toggleVisibility('dropdownVisible');
    };
    
    return( 
        <header className='header'>
            <div className='logo-container'>
                <Logo />
            </div>
            <nav className={`header-nav ${isVisible.navVisibilty ? 'visible' : ''}`}>
                <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Contact Us</a></li>
                </ul>
            </nav>
            <div className="header-collapse header-dropdown" onClick={handleDropdownClick} >
                    <FontAwesomeIcon icon={faBars} size='2x' style={{ color: "#283618"}} />
                    {isVisible.dropdownVisible && (
                        <ul className="dropdown-menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                     )}
            </div>
        </header>
    );
}

export default Header;