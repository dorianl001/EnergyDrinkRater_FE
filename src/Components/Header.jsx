import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className="Header">
            <Navbar>
                <Navbar.Brand href="#home">
                    <img
                        alt="logo"
                        src="/logo.png"
                        width="300"
                    />
                </Navbar.Brand>
                <Link to='/About'>About</Link>
                <Link to='/'>Home</Link>
                <Link to='/Ratebev'>Ratebev</Link>
            </Navbar>
        </div>
    );
}

export default Header;
