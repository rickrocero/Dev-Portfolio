import React, {useState} from 'react'
import './index.scss'
import { 
    MenuIcon,
    MenuLinks,
    Logo
} from './navbarElements'
import scrollTo from 'gatsby-plugin-smoothscroll'

const Navbar = () => {

    const [nav, showNav] = useState(false)
    const closeMenu = () => {
        showNav(false)
    }

    return (
        <header>
            <nav className="nav">
                <a onClick={() => scrollTo('.intro')}>
                    <Logo>
                        R
                    </Logo>
                </a>
                <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
                    <div />
                    <div />
                    <div />
                </MenuIcon>
            </nav>
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
        </header>
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