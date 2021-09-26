import React from 'react';
import './Header.css'
const Header = () => {
    return (
       <div>
        

        <div className="navigation">
            <div>
                <h1 className="text-white">Autism Power</h1>
            </div>
            <div className="navigation-link">
                <a href="/home">HOME</a>
                <a href="/home">ABOUT</a>
                <a href="/home">OUR TEAM</a>
                <a href="/home">FAQ</a>
                <a href="/home">CONTACT</a>
            </div>
        </div>
        <div >
             <div className="text-center header-details text-primary">
            <h1>We Support Talent of Autisms</h1>
            <h3 className="fw-bold">Total Autistic Childen Born in Bangladesh every year: 300</h3>
        </div>
        </div>
       
        </div>
        
    );
};

export default Header;