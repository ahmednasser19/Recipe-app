import React from 'react'
import styled from 'styled-components';
const Header = () => {
    return (
        < MainContainer>
          <h1> Weclome  to the Food Recipe Blog</h1>
        </ MainContainer>
    )
}

export default Header

/// MAin Container 
const MainContainer = styled.header`
background: url(../../food2.jpg)no-repeat center/cover;
height: 25rem; 
h1{
    transform : translate(-50%, -50%);
    color: #fff;
    font-weight:900;
    font-size: 42px;
    position : absolute; 
    top:25%;
    left:50%;
}

`;
