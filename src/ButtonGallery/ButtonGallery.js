import React from 'react';
import Edit from '../assets/buttons/edit.svg';
import Photo from '../assets/buttons/photo.svg';
import Delete from '../assets/buttons/delete.svg';
import '../App.css';


function ButtonGallery() {

    return(
        <div className="button__gallery">
                <div class="hover">
                    <span>Blue Sword</span>
                    <a class="social-link" href="#" target="_blank" rel="noopener noreferrer">
                        <img alt="Edit" src={Edit}/>
                    </a>
                    <a class="social-link" href="#" target="_blank" rel="noopener noreferrer">
                    <img alt="Photo" src={Photo}/>
                    </a>
                    <a class="social-link" href="#" target="_blank" rel="noopener noreferrer">
                    <img alt="Delete" src={Delete}/>
                    </a>
                </div>
            </div>
    );

}

export default ButtonGallery;
