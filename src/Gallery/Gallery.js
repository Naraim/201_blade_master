import React from 'react';
import '../Gallery/Gallery.css';
import {Link} from 'react-router-dom';
import Behance from '../assets/buttons/behance-logo.svg';
import Github from '../assets/buttons/github-logo.svg';


function Gallery() {
return(
    <div className="container--gallery">
          <div className="container__top">
                <ul className="navbar">
                    <li className="navbar__item"><Link className="navbar__link" to="/">Home</Link></li>
                    <li className="navbar__item"><Link className="navbar__link" to="/Gallery">Gallery</Link></li>
                    <li className="navbar__item"><Link className="navbar__link" to="/Create">Create</Link></li>
                </ul>
            </div>
            <div className="gallery">
                <div className="gallery__sword">
                    Espadita 1
                </div>
                <div className="gallery__sword">
                    Espadita 2
                </div>
                <div className="gallery__sword">
                    Espadita 3
                </div>
                <div className="gallery__sword">
                    Espadita 4
                </div>
            </div>
            <div className="logos">
                <div className="logos__item"><a href="https://www.behance.net/Naraim" target="_blank"><img src={Behance}/></a></div>
                <div className="logos__item"><a href="https://www.github.com/Naraim" target="_blank"><img src={Github}/></a></div>
            </div>
    </div>
);
}

export default Gallery;