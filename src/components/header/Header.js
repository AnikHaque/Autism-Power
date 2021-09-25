import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="navigation">
            <div>
                <h1 className="text-white">Autism Power</h1>
            </div>
            <div className="navigation-link">
                <a href="/home">HOME</a>
                <a href="/home">ABOUT</a>
                <a href="/home">OUR TEAM</a>
                <a href="/home">FAQ</a>
                <a href="/home">CONTACT</a>
            </div>
        </div>
    );
};

export default Header;