import React from 'react';
import Navbar from './Navbar';

function Header(props) {
    return (
        <div className="Header">
            <h3 className='logo'>EnergyDrinkRater</h3>

            <Navbar />
        </div>
    );
}

export default Header;
