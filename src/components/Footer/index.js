import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import * as footerStyles from './index.module.scss'

const Footer = () => {

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
    `)

    return (
        <footer className={footerStyles.footer}>
            <p>Created by {data.site.siteMetadata.author}, © 2021</p>
            {/* <p>Thanks for stopping by, please reach out for professional opportunities.</p>
            <p><a href="https://www.linkedin.com/in/rick-rocero/" target="_blank">Linkedin</a> | <a href="https://github.com/rickrocero" target="_blank">Github</a></p> */}
        </footer>
    )
}
    
export default Footer