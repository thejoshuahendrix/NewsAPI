import React from 'react'
import styled from 'styled-components'



const NavWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #363636;
`


const Logo = styled.div`
    margin: auto;
    margin-left: 10vw;
    text-align: center;
    font-size: large;
    font-family: monospace;
    a{
        color: white;
        text-decoration: none;
    }
  `


const NavLinks = styled.div`
    width: 30vw;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        list-style: none;
      }
    a{
        color: white;
        text-decoration: none;
    }
`







const NavBar = () => {
    return (
        <div>
            <NavWrapper>
                <Logo><a href="/">Hendrix Software- News API</a></Logo>
                <NavLinks>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                    </ul>
                </NavLinks>
            </NavWrapper>
        </div>
    )
}

export default NavBar
