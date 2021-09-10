import React from 'react'
import Navbar from '../Navbar'
import './index.scss'

const Layout = (props) => {
    return (
        <div className='container'>
            <div>
                <Navbar />
                {props.children}
            </div>
        </div>
    )
}

export default Layout

