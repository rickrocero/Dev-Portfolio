import * as React from 'react'
import * as introStyles from './intro.module.scss'
import { StaticImage, staticImage } from 'gatsby-plugin-image'

const Intro = () => {
    return (
        <section>
            <StaticImage 
                src=""
                alt="headshot"
            />
            <div>
                <h1>Hi, I'm Rick.<br/>As a JavaScript developer,<br/>I design and build intuitive full-stack applications.</h1>
            </div>
            <button>
                Portfolio
            </button>
        </section>
        
    )
}

export default Intro