import styled from 'styled-components'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    opacity: ${({menu}) => (menu ? '0': '100%')};
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 85vw;
`

export const NavLogo = styled.h1`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    font-weight: bold;
`

export const MenuIcon = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    width: 2.5rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 99;

    div {
        width: 2rem;
        height: 0.2rem;
        background: #fff;
        border-radius: 5px;
        z-index: 99;
        transform-origin: 0.25rem;
        transition: opacity 300ms, transform 300ms;

        :first-child {
            transform: ${({menu}) => (menu ? "rotate(45deg)" : "rotate(0)")};
        }

        :nth-child(2) {
            opacity: ${({menu}) => (menu ? "0" : "1")};
        }

        :nth-child(3) {
            transform: ${({menu}) => (menu ? "rotate(-45deg)" : "rotate(0)")};
        }
    }
`

export const MenuLinks = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    width: 100%;
    background: #222629;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 4;
    transition: transform 500ms;
    transform: ${({menu}) => (menu ? "translateY(0%)": "translateY(-100%)")};

    ul {
        list-style-type: none;
    }

    li {
        padding: 1.5rem;
    }

    a {
        text-decoration: none;
        font-size: 5rem;
        transition: color 300ms;
        color: #d7d7d7;

        :hover {
        color: #069390;
        }
    }
`

