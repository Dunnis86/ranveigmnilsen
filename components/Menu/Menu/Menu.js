import styled from 'styled-components';
import { bool } from 'prop-types';
import Link from 'next/link'

const StyledMenu = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 10;
  opacity: 80%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  
  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: red;
    }
  }
`;

const A = styled.a`
  display: flex;
  justify-content: center;
  align-content: center;
  img {
      max-width: 20%;
      height: auto;
    }
  @media (max-width: 576px) {
    img {
      max-width: 10%;
      height: auto;
    }
`;

const Menu = ({open}) => {
    return (
      <StyledMenu open={open}>
        <Link href="/"><a>Hjem</a></Link>
        <Link href="/galleri"><a>Galleri</a></Link>
        <Link href="/kontakt"><a>Kontakt</a></Link>
        <A href='https://www.instagram.com/bilderranveigm/'><img src='../instagram.svg'/></A>
      </StyledMenu>
    )
  }

  Menu.propTypes = {
    open: bool.isRequired,
  }
  export default Menu;