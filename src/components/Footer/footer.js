import * as React from 'react'

import * as footerStyles from './footer.module.scss'


const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <p>Created by Rick Rocero, © 2021</p>
            <p><a href="https://www.linkedin.com/in/rick-rocero/" target="_blank">LinkedIn</a> | <a href="https://github.com/rickrocero" target="_blank">GitHub</a></p>
        </footer>
    )
}

export default Footer