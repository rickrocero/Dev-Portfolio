import * as React from 'react'
import * as introStyles from './intro.module.scss'
import { StaticImage, staticImage } from 'gatsby-plugin-image'

const Intro = () => {
    return (
        <section className={introStyles.greeting}>
            <StaticImage 
                src=""
                alt=""
            />
            <div>
                <h1>Hi, I'm Rick.<br/>As a JavaScript Developer,<br/>I design and build intuitive full-stack web apps.</h1>
            </div>
            <button>
                &#60; View Portfolio  &#47;&#62;
            </button>
        </section>
        
    )
}

export default Intro