import React from 'react';

import logo from '../img/logo.png'

const Header = () => {
    return (
        <div className="header">
            <img src={logo}/>
            <ul style={{display:"flex", alignItems:"center"}}>
                <li>Home</li>
                <li>Portfolio</li>
                <li>Skills</li>
                <li>Testimonials</li>
            </ul>
            <p>Hire now</p>
        </div>
    );
};

export default Header;