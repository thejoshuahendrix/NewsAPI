import React from 'react'
import styled from 'styled-components';


export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryDark};
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  overflow:hidden;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  
  

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: .5 rem;
      text-align: center;
      overflow:hidden;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;


const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        Home
      </a>
      <a href="/about">
        About
      </a>
      <a href="/portfolio">
        Porfolio
      </a>
      <a href="/contact">
        Contact
      </a>
    </StyledMenu>
  )
}

export default Menu
