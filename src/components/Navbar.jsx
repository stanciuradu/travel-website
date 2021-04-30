import React from 'react';
import Logo from '../utils/Images/logo.png';
import {Link} from 'react-router-dom';
import '../components/Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <h1>Vacanța de vis</h1>
                <img src={Logo} alt="Logo"/>
            </div>
            <nav className='nav'>
                <ul>
                    <li>
                        <Link to='/' className='link'>Home</Link>
                        <Link to='/products' className='link'>Produse</Link>
                    </li>
                </ul>
                <button>Sign In</button>
            </nav>
        </div>
    )
}

export default Navbar;
