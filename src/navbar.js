import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src="logo.png" alt="Logo" /> OmniLearn LMS
            </div>
            <div className="navbar__dropdowns">
                <div className="navbar__dropdown">
                    <button className="navbar__dropdown-btn">Home</button>
                </div>
                <div className="navbar__dropdown">
                    <button className="navbar__dropdown-btn">Calendars</button>
                    <div className="navbar__dropdown-content">
                        <a>Menu 1</a>
                        <a>Menu 2</a>
                    </div>
                </div>
                <div className="navbar__dropdown">
                    <button className="navbar__dropdown-btn">Recordings</button>
                    <div className="navbar__dropdown-content">
                        <a>Menu 1</a>
                        <a>Menu 2</a>
                    </div>
                </div>
                <div className="navbar__dropdown">
                    <button className="navbar__dropdown-btn">Attendances</button>
                    <div className="navbar__dropdown-content">
                        <a>Menu 1</a>
                        <a>Menu 2</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
