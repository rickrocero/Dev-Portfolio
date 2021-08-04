import * as React from 'react'
import styled from 'styled-components'

export const MenuIcon = styled.button`
    position: fixed;
    top: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.5rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 5;

    div {
        width: 1.5rem;
        height: 0.2rem;
        background: black;
        border-radius: 5px;
        transform-origin: 1px;
        transition: opacity 300ms, transform 300ms;

        :first-child {
            transform: ${({nav}) => (nav ? "rotate(45deg)" : "rotate(0)")};
        }

        :nth-child(2) {
            opacity: ${({nav}) => (nav ? "0" : "1")};
        }

        :nth-child(3) {
            transform: ${({nav}) => (nav ? "rotate(-45deg)" : "rotate(0)")};
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
    background: #37283b;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 4;
    transition: transform 300ms;
    transform: ${({nav}) => (nav ? "translateX(0)": "translateX(100%)")};

    ul {
        list-style-type: none;
    }

    li {
        margin-top: 1rem;
    }

    a {
        text-decoration: none;
        font-size: 1.5rem;
        transition: color 300ms;

        :hover {
        color: #666666;
        }
    }
`

export const Logo = styled.h1`
    position: fixed;
    font-size: 2rem;
    top: 1.5rem;
    left: 2rem;
    z-index: 4;
`

