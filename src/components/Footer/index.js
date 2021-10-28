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
        <FooterWrapper>
            <FooterContainer>
                <p>Built by {data.site.siteMetadata.author}</p>
                <div className='socials'>
                    <div>
                        <StaticImage className='icon' src='../../../static/linkedin.png' alt='LinkedIn icon' width={20} height={20} objectFit='contain' />
                        <a href="https://www.linkedin.com/in/rick-rocero/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                    <div>
                        <StaticImage className='icon' src='../../../static/github.png' alt='GitHub icon' width={20} height={20} objectFit='contain' />
                        <a href="https://github.com/rickrocero" target="_blank" rel="noreferrer">GitHub</a>
                    </div>    
                </div>
            </FooterContainer>
        </FooterWrapper>
        </>
    )
}
    
export default Footer