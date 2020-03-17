import React from 'react';
import '../App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ButtonGallery from '../ButtonGallery/ButtonGallery';
import Sword from '../assets/img/Sword.svg';


function Gallery() {
return(
    <div className=" container container--gallery">
          <Header></Header>
            <h2 className="mainTitle__text mainTitle__text--gallery">Gallery</h2>
            <div className="gallery"> 
                <div className="gallery__sword gallery__sword--empty">
                
                </div>
                <div className="gallery__sword">
                    <div className="sword">
                        <img alt="Blue Sword" src={Sword}/>
                    </div>
                    <ButtonGallery></ButtonGallery>
                </div>
                <div className="gallery__sword gallery__sword--empty">
                
                </div>
                <div className="gallery__sword gallery__sword--empty">
                
                </div>               
            </div>
            <Footer></Footer>
    </div>
);
}

export default Gallery;