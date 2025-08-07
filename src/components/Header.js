import React from 'react';
import './Header.css'; // Assuming you will create a separate CSS file for Header styles

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">My Portfolio</h1>
            <nav className="header-nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;