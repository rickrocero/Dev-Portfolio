import React, { useState, useEffect } from 'react'

import { Nav, NavbarContainer, NavLogo, MenuIcon, MenuLinks } from './navbarElements'
import { NavMenuContainer } from '../NavMenu/NavMenuElements'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Navbar = () => {

    const [menu, setMenu] = useState(false)

    const closeMenu = () => {
        setMenu(false)
    }

    const navHome = () => {
        closeMenu(false)
        scrollTo('.intro')
    }

    const [scrollNav, setScrollNav] = useState(false);
    
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    },[])

    // const navTo = (e) => {
    //     const section = e.target.innerHTML.toLowerCase()
    //     closeMenu(false)
    //     scrollTo(`.${section}`)
        
    // }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo onClick={navHome}>
                        R
                    </NavLogo>
                    <MenuIcon menu={menu} onClick={() => setMenu(!menu)}>
                        <div />
                        <div />
                        <div />
                    </MenuIcon>
                </NavbarContainer>
            </Nav>
            <MenuLinks menu={menu}>
                <ul>
                    <li>
                        <AnchorLink 
                        to='/#projects'
                        onAnchorLinkClick={() => setMenu(!menu)}>
                            Projects
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink 
                        to='/#about'
                        onAnchorLinkClick={() => setMenu(!menu)}>
                            About
                        </AnchorLink>
                    </li>
                </ul>
            </MenuLinks>
        </>
    )
}

export default Navbar
