import Link from 'next/link';
import Burger from '@/components/Menu/Burger.js';
import Menu from '@/components/Menu/Menu.js';
import { useState, useRef, useEffect } from 'react';
import { useOnClickOutside } from '../src/Hooks.js';
import styled from 'styled-components';


const Div = styled.div`
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0rem 2rem 1rem;
    z-index: 10;
    @media (max-width: 576px){
        z-index: 11;
        margin: 0;
        padding: 0 0 0 1rem;
        ${props => {if (props.scrolled) return`
            opacity: 80%;
            transition: all 0.2s ease-in;
            position: sticky;
            top: 0;
            left: 0;
            box-shadow: 0px 2px 4px 0px rgb(0 0 0 / 40%);`}}}
`;

const Logo = styled.div`
    padding: 0.2rem;
    a {
        font-family: var(--fontlogo);
        font-size: 1.5rem;
    }
    
`;


const Navigation = ({props}) => {
    /*Hamburger menu open/close functionality*/
    const [open, setOpen] = useState(false);
    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));
    
    /*Navbar sticky scrolling functionality*/ 
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 1 & document.body.offsetHeight > ((window.innerHeight)*1.3)) {
        setScrolled(true);
        }
        else {
        setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    return (
        <Div scrolled={scrolled}>
            <Logo><Link href='/'><a>Ranveig M Nilsen</a></Link></Logo>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        </Div>
    )
}

export default Navigation;
