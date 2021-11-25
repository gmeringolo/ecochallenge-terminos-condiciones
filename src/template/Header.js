import React from 'react';
//imagenes
import logoApp from '../assetss/img/logoB2.png';


const Header = () => {

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand">
                    <img src={logoApp} width="80" height="50" className="d-inline-block align-top" alt=""/>                    
                </a>                
            </div> 
        </nav>
    );
}

export default Header;