import React from 'react'; 
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className='Navbar'>
            <Link to='/About'>About</Link>
            <Link to='/'>Home</Link>
            <Link to='/Ratebev'>Ratebev</Link>
        </div>
    );
}

export default Navbar;
