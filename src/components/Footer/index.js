import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FooterWrapper, FooterContainer } from './footerElements'
import { StaticImage } from 'gatsby-plugin-image'

import './index.scss'

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
        <>
        {/* // <footer className="footer"> */}
        <FooterWrapper>
            <FooterContainer>
                <p>Built by {data.site.siteMetadata.author}</p>
                <div className='socials'>
                    <div>
                        <StaticImage className='icon' src='../../../static/linkedin.png' width={20} height={20} objectFit='contain' />
                        <a href="https://www.linkedin.com/in/rick-rocero/" target="_blank">LinkedIn</a>
                    </div>
                    <div>
                        <StaticImage className='icon' src='../../../static/github.png' width={20} height={20} objectFit='contain' />
                        <a href="https://github.com/rickrocero" target="_blank">GitHub</a>
                    </div>    
                </div>
            {/* <p>Thanks for stopping by, please reach out for professional opportunities.</p>
            <p><a href="https://www.linkedin.com/in/rick-rocero/" target="_blank">Linkedin</a> | <a href="https://github.com/rickrocero" target="_blank">Github</a></p> */}
            </FooterContainer>
        </FooterWrapper>
        {/* </footer> */}
        </>
    )
}
    
export default Footer