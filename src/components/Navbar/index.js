import React, {useState} from 'react'
import * as navbarStyles from './index.module.scss'
import { 
    MenuIcon,
    MenuLinks,
    Wrapper,
    Logo
} from './navbarElements'

const Navbar = () => {

    const [nav, showNav] = useState(false)

    return (
        <header>
            <nav className={navbarStyles.nav}>
                <Logo>R</Logo>
                <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
                    <div />
                    <div />
                    <div />
                </MenuIcon>
            </nav>
            <div>
                <MenuLinks nav={nav}>
                    <ul>
                        <li>
                            <a to="#">Projects</a>
                        </li>
                        <li>
                            <a to="#">About</a>
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