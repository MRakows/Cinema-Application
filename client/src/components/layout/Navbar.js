import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper grey darken-3">
                <a href="#" className="brand-logo blue-text text-accent-1">CINEMA</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/'>POPULAR</Link></li>
                    <li><Link to='/'>TRENDING</Link></li>
                    <li><Link to='/'>PROMOTIONS</Link></li>
                    <li><Link to='/'>COMING SOON</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;