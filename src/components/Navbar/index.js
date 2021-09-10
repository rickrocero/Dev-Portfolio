import React, {useState, useEffect} from 'react'
import './index.scss'
import { 
    Nav,
    MenuIcon,
    MenuLinks,
    Logo,
    NavbarContainer
} from './navbarElements'
import scrollTo from 'gatsby-plugin-smoothscroll'

const Navbar = () => {

    const [nav, showNav] = useState(false)
    const closeMenu = () => {
        showNav(false)
    }
    // const [navbar, setNavbar] = useState(false);

    // const changeBackground = () => {
    //     if (window.scrollY >= 80) {
    //         setNavbar(true)
    //     } else {
    //         setNavbar(false)
    //     }
    // };

    // window.addEventListener('scroll', changeBackground);

    // const [scrollNav, setScrollNav] = useState(false);
    // const changeNav = () => {
    //     if(window.scrollY >= 80) {
    //         setScrollNav(true);
    //     } else {
    //         setScrollNav(false);
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', changeNav)
    // },[])

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <Logo onClick={() => scrollTo('.intro')}>
                        R
                    </Logo>
                    <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
                        <div />
                        <div />
                        <div />
                    </MenuIcon>
                </NavbarContainer>
            </Nav>
            <div>
                <MenuLinks nav={nav}>
                    <ul>
                        <li onClick={() => closeMenu()}>
                            <a onClick={() => scrollTo('.projects')}>
                                Projects
                            </a>
                        </li>
                        <li onClick={() => closeMenu()}>
                            <a onClick={() => scrollTo('.about')}>
                                About
                            </a>
                        </li>
                    </ul>
                </MenuLinks>
            </div>
        </>
    )
}

export default Navbar

// return (
//     <header>
//         <nav>
//             <h1 className={navbarStyles.logo}>R</h1>
//             <ul className={navbarStyles.navList}>
//                 <li className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem}>Work</li>
//                 <li className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem}>About</li>
//             </ul>
//         </nav>
//     </header>
    
// )