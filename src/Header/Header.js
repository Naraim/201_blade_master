import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Header() {

    return(
        <div className="container__top">
                <ul className="navbar">
                    <li className="navbar__item"><Link className="navbar__link" to="/">Home</Link></li>
                    <li className="navbar__item"><Link className="navbar__link" to="/Gallery">Gallery</Link></li>
                    <li className="navbar__item"><Link className="navbar__link" to="/Create">Create</Link></li>
                </ul>
        </div>
    );

}

export default Header;