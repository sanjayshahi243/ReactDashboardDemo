import React from 'react';
import './navbar.css';
import { Icon } from '@iconify/react';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';

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
                    <button className="navbar__dropdown-btn">
                        Calendars
                        <Icon icon='teenyicons:down-solid'></Icon>
                    </button>
                    <div className="navbar__dropdown-content">
                        <a>Menu 1</a>
                        <a>Menu 2</a>
                    </div>
                </div>
                <div className="navbar__dropdown">
                    <button className="navbar__dropdown-btn">
                        Recordings
                        <Icon icon='teenyicons:down-solid'></Icon>
                    </button>
                    <div className="navbar__dropdown-content">
                        <a>Menu 1</a>
                        <a>Menu 2</a>
                    </div>
                </div>
                <div className="navbar__dropdown">
                    <button className="navbar__dropdown-btn">
                        Attendances
                        <Icon icon='teenyicons:down-solid'></Icon>
                    </button>
                    <div className="navbar__dropdown-content">
                        <a>Menu 1</a>
                        <a>Menu 2</a>
                    </div>
                </div>

                <div className="navbar__dropdown">
                    <button className="navbar__dropdown-btn">
                        <div style={{display:'flex', alignItems: 'center'}}>
                            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar> 
                            Oman
                            <Icon icon='teenyicons:down-solid'></Icon>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
