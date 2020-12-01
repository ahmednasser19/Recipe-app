import React from 'react'
import Logo from '../logo2.png';
import styled from 'styled-components';
export const Navbar = () => {
    return (
    <NavbarContainer>
        <nav className="navbar navbar-expand-lg navbar-light px-5 py-0 ">
            <a className="navbar-brand" href="#">
                <img   style={{width: '50px'}}src={Logo} alt="logo" />
                </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Add Recipe </a>
                </li>
                
                </ul>
                
            </div>
        </nav>
      
    </NavbarContainer>
    )
}

export default Navbar ;

// Main navbar container 

const NavbarContainer = styled.div`
    background : var(--dark-green);
    .nav-link { 
        color :#fff !important; 
        &:hover {
            background:  var(--light-green);
        }
    } 
    

`;