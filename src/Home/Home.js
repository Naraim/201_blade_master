import React from 'react';
import '../Home/Home.css';
import { Link } from 'react-router-dom';
import Behance from '../assets/buttons/behance-logo.svg';
import Github from '../assets/buttons/github-logo.svg';


function Home() {
    return(

        <div className="container">
            <div className="borderLeft"></div>
            <div className="container__top">
                <ul className="navbar">
                    <li className="navbar__item"><Link className="navbar__link" to="/">Home</Link></li>
                    <li className="navbar__item"><Link className="navbar__link" to="/Gallery">Gallery</Link></li>
                    <li className="navbar__item"><Link className="navbar__link" to="/Create">Create</Link></li>
                </ul>
            </div>
            <div className="mainTitle">
                    <h1 className="mainTitle__text">BLADE MASTER</h1>
            </div>
            <div className="logos">
                <div className="logos__item"><a href="https://www.behance.net/Naraim" target="_blank"><img src={Behance}/></a></div>
                <div className="logos__item"><a href="https://www.github.com/Naraim" target="_blank"><img src={Github}/></a></div>
            </div>
        </div>
    );


}

export default Home;