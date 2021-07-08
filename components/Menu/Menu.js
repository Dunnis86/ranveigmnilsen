import styled from 'styled-components';
import { bool } from 'prop-types';
import Link from 'next/link';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledMenu = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background: white;
  height: 100%;
  text-align: left;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 10;
  opacity: 80%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};

  @media (max-width: 567px) {
    width: 100%;
  }


  a {
    font-size: 2rem;
    font-weight: 100;
    padding: 2rem 0;
    letter-spacing: 0;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 823px)
      and (min-width: 568px)
      and (orientation: landscape) {
        font-size: 1.5rem;
        padding: 1rem 0;
    }
    
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: red;
    }
   

  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin: 2rem 0;
  @media(max-width: 576px) {
  align-self: center;
}
`;

const Menu = ({open}) => {
    return (
      <StyledMenu open={open}>
        <Link href="/"><a>Hjem</a></Link>
        <Link href="/om"><a>Om meg</a></Link>
        <Link href="/kontakt"><a>Kontakt</a></Link>
        <Icon icon={faInstagram} size="2x"/>
      </StyledMenu>
    )
  }

  Menu.propTypes = {
    open: bool.isRequired,
  }
  export default Menu;