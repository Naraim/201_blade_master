import React from 'react';
import Behance from '../assets/buttons/behance-logo.svg';
import Github from '../assets/buttons/github-logo.svg';
import '../App.css';


function Footer(){
    
    return(
        <div className="logos">
            <div className="logos__item"><a href="https://www.behance.net/Naraim" target="_blank" rel="noopener noreferrer"><img src={Behance} alt="Behance"/></a></div>
            <div className="logos__item"><a href="https://github.com/Naraim/201_blade_master" target="_blank" rel="noopener noreferrer"><img src={Github} alt="Github"/></a></div>
        </div>
    );

}

export default Footer;