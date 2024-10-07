import React from 'react'; 
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Test">Test</Link>
        </nav>
    );
}

export default Header;
